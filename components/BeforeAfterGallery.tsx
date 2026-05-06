"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface GalleryItem {
  id: number;
  before: string;
  after: string;
  title: string;
}

interface Props {
  lang: "en" | "es";
}

export default function BeforeAfterGallery({ lang }: Props) {
  const isEnglish = lang === "en";

  const content = {
    title: isEnglish
      ? "Before & After Transformations"
      : "Transformaciones Antes y Después",
    subtitle: isEnglish
      ? "Drag the slider to see the difference."
      : "Desliza el control para ver la diferencia.",
    before: isEnglish ? "Before" : "Antes",
    after: isEnglish ? "After" : "Después",
  };

  const items: GalleryItem[] = [
    {
      id: 1,
      before: "/images/before1.png",
      after: "/images/after1.png",
      title: "Kitchen Remodel",
    },
    {
      id: 2,
      before: "/images/before2.png",
      after: "/images/after2.png",
      title: "Bathroom Renovation",
    },
  ];

  return (
    <section
        id="before-after"
        className="w-full py-20 bg-gray-50 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.title}
          </h2>
          <p className="text-gray-600">
            {content.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {items.map((item) => (
            <SliderCard
              key={item.id}
              item={item}
              beforeLabel={content.before}
              afterLabel={content.after}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

/* ================= SLIDER CARD ================= */

function SliderCard({
  item,
  beforeLabel,
  afterLabel,
}: {
  item: GalleryItem;
  beforeLabel: string;
  afterLabel: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX: number) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = (offsetX / rect.width) * 100;

    // Control de límites seguro
    if (percentage >= 0 && percentage <= 100) {
      setPosition(percentage);
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      updatePosition(e.touches[0].clientX);
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div>
      <h3 className="font-semibold text-lg mb-4">{item.title}</h3>

      <div
        ref={containerRef}
        className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl shadow-soft select-none"
      >
        {/* BEFORE */}
        <Image
          src={item.before}
          alt="Before renovation"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />

        <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {beforeLabel}
        </span>

        {/* AFTER */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <Image
            src={item.after}
            alt="After renovation"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
          />
        </div>

        <span className="absolute top-4 right-4 bg-accent text-white text-xs px-3 py-1 rounded-full">
          {afterLabel}
        </span>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        />

        {/* Handle */}
        <div
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          className="absolute w-10 h-10 bg-accent border-4 border-white rounded-full cursor-ew-resize shadow-soft flex items-center justify-center"
          style={{
            left: `${position}%`,
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-white text-sm font-bold">⇄</span>
        </div>
      </div>
    </div>
  );
}