"use client";

import { useEffect, useState, type ComponentType } from "react";

export function HeroParticleFlowLoader() {
  const [Flow, setFlow] = useState<ComponentType | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    let active = true;

    const update = () => {
      if (reducedMotion.matches || !desktop.matches) {
        setFlow(null);
        return;
      }

      void import("./HeroParticleFlow").then((module) => {
        if (active && !reducedMotion.matches && desktop.matches) {
          setFlow(() => module.HeroParticleFlow);
        }
      });
    };

    reducedMotion.addEventListener("change", update);
    desktop.addEventListener("change", update);
    update();

    return () => {
      active = false;
      reducedMotion.removeEventListener("change", update);
      desktop.removeEventListener("change", update);
    };
  }, []);

  return Flow ? <Flow /> : null;
}
