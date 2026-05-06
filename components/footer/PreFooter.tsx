"use client";

import { Home, Users, Star } from "lucide-react";

interface Props {
  lang: "en" | "es";
}

export default function PreFooter({ lang }: Props) {
  const isEnglish = lang === "en";

  const content = {
    projects: isEnglish
      ? "Projects Completed in San Antonio"
      : "Proyectos Completados en San Antonio",
    satisfaction: isEnglish
      ? "Customer Satisfaction"
      : "Satisfacción del Cliente",
    rating: isEnglish
      ? "Rated by Our Happy Clients"
      : "Calificado por Nuestros Clientes",
  };

  return (
    <section
      aria-label="Company achievements"
      className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white border-t border-gray-200"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-3 md:divide-x md:divide-gray-300">

          <div className="flex flex-col items-center space-y-5 md:px-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 shadow-md transition-transform duration-300 hover:scale-105">
              <Home className="h-9 w-9 text-orange-500" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900">100+</h3>
              <p className="mt-2 text-gray-600">
                {content.projects}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5 md:px-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 shadow-md transition-transform duration-300 hover:scale-105">
              <Users className="h-9 w-9 text-orange-500" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900">100%</h3>
              <p className="mt-2 text-gray-600">
                {content.satisfaction}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-5 md:px-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 shadow-md transition-transform duration-300 hover:scale-105">
              <Star className="h-9 w-9 text-orange-500" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-gray-900">5‑Star</h3>
              <p className="mt-2 text-gray-600">
                {content.rating}
              </p>

              <div
                className="mt-3 flex justify-center space-x-1"
                aria-label="5 star rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-500 text-orange-500 drop-shadow-sm"
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}