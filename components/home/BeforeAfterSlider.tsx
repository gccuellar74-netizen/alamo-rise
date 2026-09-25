"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";

import { Container } from "@/components/ui/Container";
import type { EnglishHomeDictionary } from "@/content/en/home";
import type { SpanishHomeDictionary } from "@/content/es/home";

type HomeDictionary =
  | EnglishHomeDictionary
  | SpanishHomeDictionary;

type BeforeAfterSliderProps = {
  content: HomeDictionary["beforeAfter"];
};

export function BeforeAfterSlider({
  content,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const nextPosition =
      ((clientX - rect.left) / rect.width) * 100;

    setPosition(
      Math.min(100, Math.max(0, nextPosition)),
    );
  }, []);

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    setIsDragging(true);
    event.currentTarget.setPointerCapture(
      event.pointerId,
    );
    updatePosition(event.clientX);
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (!isDragging) {
      return;
    }

    updatePosition(event.clientX);
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    setIsDragging(false);

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) {
    const step = event.shiftKey ? 10 : 2;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((current) =>
        Math.max(0, current - step),
      );
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((current) =>
        Math.min(100, current + step),
      );
    }

    if (event.key === "Home") {
      event.preventDefault();
      setPosition(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      setPosition(100);
    }
  }

  return (
    <section
      aria-labelledby="before-after-heading"
      className="bg-white"
    >
      <Container className="section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-700">
            {content.eyebrow}
          </p>

          <h2
            id="before-after-heading"
            className="mt-3 text-balance text-charcoal-950"
          >
            {content.title}
          </h2>

          <p className="mt-5 text-pretty text-base leading-7 text-charcoal-600 sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl lg:mt-14">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] select-none overflow-hidden rounded-2xl bg-charcoal-100 shadow-elevated sm:aspect-[16/10] lg:aspect-[16/9]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            <Image
              src={content.imageAfter}
              alt={content.altAfter}
              fill
              sizes="(max-width: 1023px) 100vw, 80rem"
              className="pointer-events-none object-cover"
            />

            <div
              className="absolute inset-0 overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - position}% 0 0)`,
                }}
              >
                <Image
                  src={content.imageBefore}
                  alt={content.altBefore}
                  fill
                  sizes="(max-width: 1023px) 100vw, 80rem"
                  className="pointer-events-none object-cover"
                />
              </div>

            <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {content.beforeLabel}
            </div>

            <div className="pointer-events-none absolute right-4 top-4 rounded-full bg-black/65 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {content.afterLabel}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]"
              style={{
                left: `${position}%`,
              }}
            />

            <button
              type="button"
              role="slider"
              aria-label={`${content.beforeLabel} / ${content.afterLabel}`}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onKeyDown={handleKeyDown}
              className="absolute top-1/2 z-10 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-white shadow-elevated transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-600/25"
              style={{
                left: `${position}%`,
              }}
            >
              <GripVertical
                aria-hidden="true"
                className="size-5"
              />
            </button>
          </div>

          {content.disclaimer ? (
            <p className="mt-4 text-center text-xs leading-5 text-charcoal-500">
              {content.disclaimer}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}