"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { profile } from "@/content/profile";
import { routes } from "@/lib/routes";

const clamp = (value: number, minimum: number, maximum: number) =>
  Math.min(Math.max(value, minimum), maximum);

export function PortalHero() {
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLImageElement>(null);
  const washRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const amberDotRef = useRef<HTMLSpanElement>(null);
  const tealDotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!root || !stage || reducedMotion.matches) {
      return;
    }

    root.dataset.motion = "ready";
    let frame = 0;

    const render = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const travel = root.offsetHeight - stage.offsetHeight;
      const progress = clamp((58 - rect.top) / Math.max(travel, 1), 0, 1);
      const opening = progress;
      const mobile = window.innerWidth < 768;
      const viewportShift = Math.min(
        window.innerWidth * (mobile ? 0.3 : 0.18),
        mobile ? 120 : 260,
      ) * progress;

      if (photoRef.current) {
        photoRef.current.style.transform = `translate3d(0, ${progress * (mobile ? -1 : -2.5)}%, 0) scale(${1.08 - progress * 0.08})`;
      }
      if (washRef.current) {
        washRef.current.style.opacity = `${progress * 0.24}`;
      }
      if (leftPanelRef.current) {
        leftPanelRef.current.style.transform = `translate3d(${-104 * opening}%, 0, 0)`;
      }
      if (rightPanelRef.current) {
        rightPanelRef.current.style.transform = `translate3d(${104 * opening}%, 0, 0)`;
      }
      if (titleRef.current) {
        titleRef.current.style.transform = `translate3d(-50%, calc(-50% + ${progress * (mobile ? -6 : -10)}px), 0) scale(${1 + progress * (mobile ? 0.07 : 0.1)})`;
        titleRef.current.style.letterSpacing = `${0.04 * (1 - progress)}em`;
      }
      if (firstNameRef.current) {
        firstNameRef.current.style.transform = `translate3d(${-viewportShift}px, 0, 0)`;
      }
      if (lastNameRef.current) {
        lastNameRef.current.style.transform = `translate3d(${viewportShift}px, 0, 0)`;
      }
      if (amberDotRef.current) {
        amberDotRef.current.style.transform = `translate3d(${-progress * 38}vw, ${progress * -25}vh, 0)`;
      }
      if (tealDotRef.current) {
        tealDotRef.current.style.transform = `translate3d(${progress * 38}vw, ${progress * 25}vh, 0)`;
      }
    };

    const requestRender = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender, { passive: true });
    render();

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);
      delete root.dataset.motion;
    };
  }, []);

  return (
    <section ref={rootRef} className="portal-hero" aria-labelledby="portal-title">
      <div ref={stageRef} className="portal-stage">
        <div className="portal-photo-frame" aria-hidden="true">
          <Image
            ref={photoRef}
            src="/youfu-portrait.webp"
            alt=""
            className="portal-photo"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div ref={washRef} className="portal-wash" aria-hidden="true" />
        <div className="portal-veil" aria-hidden="true" />
        <div ref={leftPanelRef} className="portal-panel portal-panel-left" aria-hidden="true" />
        <div ref={rightPanelRef} className="portal-panel portal-panel-right" aria-hidden="true" />
        <span ref={amberDotRef} className="portal-dot portal-dot-amber" aria-hidden="true" />
        <span ref={tealDotRef} className="portal-dot portal-dot-teal" aria-hidden="true" />

        <div className="portal-meta portal-meta-left">SDE / AMAZON</div>
        <div className="portal-meta portal-meta-right">NEW YORK / 2026</div>

        <h1 ref={titleRef} id="portal-title" className="portal-title" aria-label="Youfu Yan">
          <span ref={firstNameRef} aria-hidden="true">YOUFU</span>
          <span ref={lastNameRef} aria-hidden="true">YAN<span className="text-amber">.</span></span>
        </h1>

        <div className="portal-copy">
          <p className="portal-role">{profile.hero.eyebrow}</p>
          <p className="portal-statement">{profile.hero.title}</p>
        </div>

        <div className="portal-actions">
          <Link href={routes.work} className="portal-primary pressable">
            Selected work <span aria-hidden="true">↗</span>
          </Link>
          <Link href={routes.resume} className="portal-secondary pressable">
            Resume.pdf <span aria-hidden="true">↓</span>
          </Link>
        </div>

        <div className="portal-next-preview" aria-hidden="true">
          <span>02</span>
          <span>Engineering range</span>
          <span>Production / research</span>
        </div>
      </div>
    </section>
  );
}
