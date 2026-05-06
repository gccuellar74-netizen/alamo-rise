"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

type Props = {
  lang: "en" | "es";
};

export default function TestimonialsCarousel({ lang }: Props) {
  const isEnglish = lang === "en";

  const testimonials = [
    {
      name: "Laura M.",
      image: "/images/testimonials/client1.jpg",
      text: isEnglish
        ? "Excellent service! They transformed our kitchen and we couldn’t be happier with the results."
        : "¡Excelente servicio! Transformaron nuestra cocina y estamos encantados con el resultado.",
    },
    {
      name: "Carlos R.",
      image: "/images/testimonials/client2.jpg",
      text: isEnglish
        ? "Very professional and punctual. They repaired our roof quickly and efficiently."
        : "Muy profesionales y puntuales. Repararon nuestro techo rápidamente.",
    },
    {
      name: "Emily T.",
      image: "/images/testimonials/client3.jpg",
      text: isEnglish
        ? "The team was amazing from start to finish. Highly recommended!"
        : "El equipo fue increíble desde el inicio hasta el final. ¡Altamente recomendados!",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
      <section
        id="testimonials"
        className="bg-softgray py-20 scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="font-heading font-bold mb-12">
          {isEnglish ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
        </h2>

        <div className="bg-white rounded-xl shadow-soft p-8 md:p-12 transition-all duration-500">

          <div className="flex justify-center mb-6">
            <Image
              src={current.image}
              alt={current.name}
              width={90}
              height={90}
              sizes="90px"
              className="w-[90px] h-[90px] rounded-full object-cover"
            />
          </div>

          <div className="flex justify-center mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={20}
                className="text-accent fill-accent"
              />
            ))}
          </div>

          <p className="text-lg italic mb-6">
            "{current.text}"
          </p>

          <h4 className="font-heading font-semibold">
            — {current.name}
          </h4>
        </div>
      </div>
    </section>
  );
}