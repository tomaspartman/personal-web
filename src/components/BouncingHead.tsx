import { useCallback, useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";

const HORIZONTAL_SPEED = 150;
const VERTICAL_SPEED = 118;
const MAX_BUBBLES = 8;
const MIN_SPLIT_SIZE = 50;
const MIN_BUBBLE_SIZE = 44;
const POP_DURATION = 220;
const SPLIT_PROBABILITY = 0.65;

type BubbleState = "active" | "popping";

type Bubble = {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  state: BubbleState;
};

type BubbleView = Pick<Bubble, "id" | "x" | "y" | "size" | "state">;

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(minimum, value), maximum);

export const BouncingHead = () => {
  const bubblesRef = useRef<Bubble[]>([]);
  const bubbleElementsRef = useRef(new Map<number, HTMLButtonElement>());
  const pausedBubblesRef = useRef(new Set<number>());
  const removalTimersRef = useRef<number[]>([]);
  const nextBubbleIdRef = useRef(1);
  const [renderedBubbles, setRenderedBubbles] = useState<BubbleView[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const syncRenderedBubbles = useCallback(() => {
    setRenderedBubbles(
      bubblesRef.current.map(({ id, x, y, size, state }) => ({ id, x, y, size, state })),
    );
  }, []);

  const registerBubble = useCallback((id: number, element: HTMLButtonElement | null) => {
    if (element) {
      bubbleElementsRef.current.set(id, element);
    } else {
      bubbleElementsRef.current.delete(id);
    }
  }, []);

  useEffect(() => {
    const removalTimers = removalTimersRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let previousTime = performance.now();

    if (bubblesRef.current.length === 0) {
      const initialSize = window.matchMedia("(min-width: 640px)").matches ? 96 : 76;
      bubblesRef.current = [
        {
          id: 0,
          x: 24,
          y: 120,
          vx: HORIZONTAL_SPEED,
          vy: VERTICAL_SPEED,
          size: initialSize,
          state: "active",
        },
      ];
    }

    const renderBubble = (bubble: Bubble) => {
      const element = bubbleElementsRef.current.get(bubble.id);
      if (!element) return;
      element.style.transform = `translate3d(${bubble.x}px, ${bubble.y}px, 0)`;
    };

    const keepInsideViewport = (bubble: Bubble) => {
      const maxX = Math.max(0, document.documentElement.clientWidth - bubble.size);
      const maxY = Math.max(0, document.documentElement.clientHeight - bubble.size);
      bubble.x = clamp(bubble.x, 0, maxX);
      bubble.y = clamp(bubble.y, 0, maxY);
    };

    const placeInRestingPositions = () => {
      bubblesRef.current.forEach((bubble, index) => {
        const stagger = Math.min(index * 12, 60);
        bubble.x = Math.max(
          0,
          document.documentElement.clientWidth - bubble.size - 20 - stagger,
        );
        bubble.y = Math.max(
          0,
          document.documentElement.clientHeight - bubble.size - 20 - stagger,
        );
        renderBubble(bubble);
      });
    };

    const animate = (time: number) => {
      const deltaSeconds = Math.min((time - previousTime) / 1000, 0.034);
      previousTime = time;

      bubblesRef.current.forEach((bubble) => {
        if (bubble.state !== "active" || pausedBubblesRef.current.has(bubble.id)) return;

        const maxX = Math.max(0, document.documentElement.clientWidth - bubble.size);
        const maxY = Math.max(0, document.documentElement.clientHeight - bubble.size);
        let nextX = bubble.x + bubble.vx * deltaSeconds;
        let nextY = bubble.y + bubble.vy * deltaSeconds;

        if (nextX <= 0 || nextX >= maxX) {
          bubble.vx = nextX <= 0 ? Math.abs(bubble.vx) : -Math.abs(bubble.vx);
          nextX = clamp(nextX, 0, maxX);
        }

        if (nextY <= 0 || nextY >= maxY) {
          bubble.vy = nextY <= 0 ? Math.abs(bubble.vy) : -Math.abs(bubble.vy);
          nextY = clamp(nextY, 0, maxY);
        }

        bubble.x = nextX;
        bubble.y = nextY;
        renderBubble(bubble);
      });

      animationFrame = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(animationFrame);
      if (reducedMotion.matches) {
        placeInRestingPositions();
        syncRenderedBubbles();
        return;
      }

      bubblesRef.current.forEach(keepInsideViewport);
      previousTime = performance.now();
      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (reducedMotion.matches) {
        placeInRestingPositions();
        syncRenderedBubbles();
      } else {
        bubblesRef.current.forEach((bubble) => {
          keepInsideViewport(bubble);
          renderBubble(bubble);
        });
      }
    };

    start();
    syncRenderedBubbles();
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(animationFrame);
      removalTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", start);
    };
  }, [syncRenderedBubbles]);

  const setBubblePaused = (id: number, paused: boolean) => {
    if (paused) {
      pausedBubblesRef.current.add(id);
    } else {
      pausedBubblesRef.current.delete(id);
    }
  };

  const popBubble = (bubble: Bubble) => {
    bubble.state = "popping";
    pausedBubblesRef.current.add(bubble.id);
    syncRenderedBubbles();
    setAnnouncement("The face bubble popped.");

    const timer = window.setTimeout(() => {
      bubblesRef.current = bubblesRef.current.filter((candidate) => candidate.id !== bubble.id);
      pausedBubblesRef.current.delete(bubble.id);
      syncRenderedBubbles();
    }, POP_DURATION);

    removalTimersRef.current.push(timer);
  };

  const splitBubble = (bubble: Bubble) => {
    const childSize = Math.max(MIN_BUBBLE_SIZE, Math.round(bubble.size * 0.78));
    const centerX = bubble.x + bubble.size / 2;
    const centerY = bubble.y + bubble.size / 2;
    const maxX = Math.max(0, document.documentElement.clientWidth - childSize);
    const maxY = Math.max(0, document.documentElement.clientHeight - childSize);
    const speed = Math.max(135, Math.hypot(bubble.vx, bubble.vy) * 1.08);
    const direction = Math.atan2(bubble.vy, bubble.vx);

    const createChild = (angle: number, xOffset: number): Bubble => ({
      id: nextBubbleIdRef.current++,
      x: clamp(centerX - childSize / 2 + xOffset, 0, maxX),
      y: clamp(centerY - childSize / 2, 0, maxY),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: childSize,
      state: "active",
    });

    const children = [
      createChild(direction - 0.72, -childSize * 0.28),
      createChild(direction + 0.72, childSize * 0.28),
    ];

    bubblesRef.current = [
      ...bubblesRef.current.filter((candidate) => candidate.id !== bubble.id),
      ...children,
    ];
    pausedBubblesRef.current.delete(bubble.id);
    syncRenderedBubbles();
    setAnnouncement("The face bubble split into two smaller bubbles.");
  };

  const handleBubbleClick = (id: number) => {
    const bubble = bubblesRef.current.find((candidate) => candidate.id === id);
    if (!bubble || bubble.state !== "active") return;

    const activeBubbleCount = bubblesRef.current.filter(
      (candidate) => candidate.state === "active",
    ).length;
    const canSplit = bubble.size > MIN_SPLIT_SIZE && activeBubbleCount < MAX_BUBBLES;

    if (canSplit && Math.random() < SPLIT_PROBABILITY) {
      splitBubble(bubble);
    } else {
      popBubble(bubble);
    }
  };

  return (
    <>
      {renderedBubbles.map((bubble, index) => (
        <button
          key={bubble.id}
          ref={(element) => registerBubble(bubble.id, element)}
          type="button"
          aria-label={`Tomas face bubble ${index + 1}. Click to pop it or split it in two.`}
          title="Click: 65% chance to split, 35% chance to pop"
          className="group fixed left-0 top-0 z-[70] cursor-pointer touch-manipulation rounded-full focus-visible:outline-none"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: `translate3d(${bubble.x}px, ${bubble.y}px, 0)`,
          }}
          onClick={() => handleBubbleClick(bubble.id)}
          onFocus={() => setBubblePaused(bubble.id, true)}
          onBlur={() => setBubblePaused(bubble.id, false)}
        >
          <span
            className={`block h-full w-full overflow-hidden rounded-full border-[3px] border-background bg-secondary shadow-xl ring-2 ring-accent transition-[transform,opacity] duration-200 ease-out group-focus-visible:ring-4 group-focus-visible:ring-ring ${
              bubble.state === "popping"
                ? "scale-0 opacity-0"
                : "scale-100 opacity-100 group-hover:scale-105"
            }`}
          >
            <img
              src={heroImg}
              alt=""
              className="h-full w-full origin-[47%_5%] scale-[3.4] object-cover object-center"
              draggable={false}
            />
          </span>
        </button>
      ))}
      <span className="sr-only" aria-live="polite">
        {announcement}
      </span>
    </>
  );
};
