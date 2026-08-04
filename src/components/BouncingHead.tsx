import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";

const HORIZONTAL_SPEED = 150;
const VERTICAL_SPEED = 118;

export const BouncingHead = () => {
  const ballRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ball = ballRef.current;
    if (!ball) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let previousTime = performance.now();
    let maxX = 0;
    let maxY = 0;
    const position = { x: 24, y: 120 };
    const velocity = { x: HORIZONTAL_SPEED, y: VERTICAL_SPEED };

    const render = () => {
      ball.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
    };

    const refreshBounds = () => {
      maxX = Math.max(0, document.documentElement.clientWidth - ball.offsetWidth);
      maxY = Math.max(0, document.documentElement.clientHeight - ball.offsetHeight);
      position.x = Math.min(Math.max(0, position.x), maxX);
      position.y = Math.min(Math.max(0, position.y), maxY);
    };

    const placeInRestingPosition = () => {
      refreshBounds();
      position.x = Math.max(0, maxX - 20);
      position.y = Math.max(0, maxY - 20);
      render();
    };

    const animate = (time: number) => {
      const deltaSeconds = Math.min((time - previousTime) / 1000, 0.034);
      previousTime = time;

      let nextX = position.x + velocity.x * deltaSeconds;
      let nextY = position.y + velocity.y * deltaSeconds;

      if (nextX <= 0 || nextX >= maxX) {
        velocity.x = nextX <= 0 ? Math.abs(velocity.x) : -Math.abs(velocity.x);
        nextX = Math.min(Math.max(0, nextX), maxX);
      }

      if (nextY <= 0 || nextY >= maxY) {
        velocity.y = nextY <= 0 ? Math.abs(velocity.y) : -Math.abs(velocity.y);
        nextY = Math.min(Math.max(0, nextY), maxY);
      }

      position.x = nextX;
      position.y = nextY;
      render();
      animationFrame = requestAnimationFrame(animate);
    };

    const start = () => {
      cancelAnimationFrame(animationFrame);
      if (reducedMotion.matches) {
        placeInRestingPosition();
        return;
      }

      refreshBounds();
      previousTime = performance.now();
      render();
      animationFrame = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (reducedMotion.matches) {
        placeInRestingPosition();
      } else {
        refreshBounds();
        render();
      }
    };

    start();
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", start);
    };
  }, []);

  return (
    <div
      ref={ballRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-[76px] w-[76px] overflow-hidden rounded-full border-[3px] border-background bg-secondary shadow-xl ring-2 ring-accent sm:h-24 sm:w-24"
    >
      <img
        src={heroImg}
        alt=""
        className="h-full w-full origin-[50%_27%] scale-[2.15] object-cover object-center"
        draggable={false}
      />
    </div>
  );
};
