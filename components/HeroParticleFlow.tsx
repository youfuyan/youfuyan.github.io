"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 420;

export function HeroParticleFlow() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    if (!host || reducedMotion.matches || !desktop.matches) {
      return;
    }

    let cancelled = false;
    let teardown = () => {};

    void Promise.resolve(THREE).then((THREE) => {
      if (cancelled) {
        return;
      }

      let renderer: import("three").WebGLRenderer;

      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: false,
          powerPreference: "low-power",
        });
      } catch {
        return;
      }

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.domElement.className = "hero-particle-canvas";
      renderer.domElement.setAttribute("aria-hidden", "true");
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 50);
      camera.position.z = 10;

      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-4.5, -1.5, 0),
          new THREE.Vector3(-3.4, -0.8, -0.1),
          new THREE.Vector3(-1.3, 0.8, 0),
          new THREE.Vector3(0.9, -0.1, 0.15),
          new THREE.Vector3(4.25, 1.6, 0),
        ],
        false,
        "centripetal",
      );
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const colors = new Float32Array(PARTICLE_COUNT * 3);
      const phases = new Float32Array(PARTICLE_COUNT);
      const lanes = new Float32Array(PARTICLE_COUNT);
      const depths = new Float32Array(PARTICLE_COUNT);
      const palette = [
        new THREE.Color(0x60a5fa),
        new THREE.Color(0xbfdbfe),
        new THREE.Color(0x34d399),
      ];

      let seed = 20260717;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };

      for (let index = 0; index < PARTICLE_COUNT; index += 1) {
        phases[index] = random();
        lanes[index] = (random() - 0.5) * 0.42;
        depths[index] = (random() - 0.5) * 1.1;
        const color = palette[random() > 0.82 ? (random() > 0.7 ? 2 : 1) : 0];
        const offset = index * 3;
        colors[offset] = color.r;
        colors[offset + 1] = color.g;
        colors[offset + 2] = color.b;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
      const material = new THREE.PointsMaterial({
        size: 0.09,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
        vertexColors: true,
      });
      const flow = new THREE.Points(geometry, material);
      scene.add(flow);

      const timer = new THREE.Timer();
      const point = new THREE.Vector3();
      let frame = 0;
      let isVisible = true;
      let isIntersecting = true;
      let pointerX = 0;
      let pointerY = 0;

      const resize = () => {
        const { width, height } = host.getBoundingClientRect();

        if (!width || !height) {
          return;
        }

        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const draw = (timestamp?: number) => {
        timer.update(timestamp);
        const elapsed = timer.getElapsed();
        const positionAttribute = geometry.getAttribute("position");

        for (let index = 0; index < PARTICLE_COUNT; index += 1) {
          const progress = (phases[index] + elapsed * 0.06) % 1;
          curve.getPointAt(progress, point);
          const offset = index * 3;

          positions[offset] = point.x;
          positions[offset + 1] =
            point.y + lanes[index] + Math.sin(progress * Math.PI * 6) * 0.08;
          positions[offset + 2] = point.z + depths[index];
        }

        positionAttribute.needsUpdate = true;
        flow.rotation.x += (pointerY * 0.05 - flow.rotation.x) * 0.04;
        flow.rotation.y += (pointerX * 0.075 - flow.rotation.y) * 0.04;
        renderer.render(scene, camera);
      };

      const animate = (timestamp: number) => {
        if (!isVisible || !isIntersecting || reducedMotion.matches) {
          frame = 0;
          return;
        }

        draw(timestamp);
        renderer.domElement.dataset.ready = "true";
        host.dataset.ready = "true";
        frame = window.requestAnimationFrame(animate);
      };

      const start = () => {
        if (!frame && isVisible && isIntersecting && !reducedMotion.matches) {
          timer.reset();
          frame = window.requestAnimationFrame(animate);
        }
      };

      const handlePointerMove = (event: PointerEvent) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const handleVisibilityChange = () => {
        isVisible = document.visibilityState === "visible";

        if (isVisible) {
          start();
        } else if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      };

      const handleMotionChange = () => {
        if (reducedMotion.matches && frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
          renderer.domElement.dataset.ready = "false";
          host.dataset.ready = "false";
        } else {
          start();
        }
      };

      const resizeObserver = new ResizeObserver(resize);
      const intersectionObserver = new IntersectionObserver(([entry]) => {
        isIntersecting = entry.isIntersecting;

        if (isIntersecting) {
          start();
        } else if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      });

      resizeObserver.observe(host);
      intersectionObserver.observe(host);
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
      document.addEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.addEventListener("change", handleMotionChange);
      resize();
      draw();
      start();

      teardown = () => {
        if (frame) {
          window.cancelAnimationFrame(frame);
        }
        resizeObserver.disconnect();
        intersectionObserver.disconnect();
        window.removeEventListener("pointermove", handlePointerMove);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        reducedMotion.removeEventListener("change", handleMotionChange);
        geometry.dispose();
        material.dispose();
        timer.dispose();
        renderer.dispose();
        renderer.domElement.remove();
        delete host.dataset.ready;
      };
    });

    return () => {
      cancelled = true;
      teardown();
    };
  }, []);

  return <div ref={hostRef} className="hero-particle-flow" aria-hidden="true" />;
}
