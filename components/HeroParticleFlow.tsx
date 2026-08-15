"use client";

import { useEffect, useRef } from "react";

type TubesCursorInstance = {
  destroy?: () => void;
  dispose?: () => void;
  renderer?: {
    dispose?: () => void;
    setAnimationLoop?: (callback: null) => void;
  };
};

export function HeroParticleFlow() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!host || !canvas || reducedMotion.matches || !finePointer.matches) {
      return;
    }

    let active = true;
    let readyFrame = 0;
    let instance: TubesCursorInstance | undefined;

    void import("threejs-components/build/cursors/tubes1.min.js").then(
      ({ default: createTubesCursor }) => {
        if (!active) {
          return;
        }

        instance = createTubesCursor(canvas, {
          tubes: {
            colors: ["#e8913c", "#5ed7cb", "#f06d8f"],
            lights: {
              intensity: 180,
              colors: ["#ede7dc", "#ffad55", "#ff5b91", "#60d5d0"],
            },
          },
        });

        readyFrame = window.requestAnimationFrame(() => {
          readyFrame = window.requestAnimationFrame(() => {
            canvas.dataset.ready = "true";
            host.dataset.ready = "true";
          });
        });
      },
    );

    return () => {
      active = false;
      if (readyFrame) {
        window.cancelAnimationFrame(readyFrame);
      }
      instance?.renderer?.setAnimationLoop?.(null);
      instance?.destroy?.();
      instance?.dispose?.();
      instance?.renderer?.dispose?.();
      delete canvas.dataset.ready;
      delete host.dataset.ready;
    };
  }, []);

  return (
    <div ref={hostRef} className="global-particle-flow" aria-hidden="true">
      <canvas ref={canvasRef} className="global-particle-canvas" />
    </div>
  );
}
