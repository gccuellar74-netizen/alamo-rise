"use client";

import Link from "next/link";
import { ReactNode } from "react";

type FooterLink = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

export default function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>

      <div className="mt-4 h-1 w-10 rounded bg-orange-500" />

      <ul className="mt-6 space-y-4">
        {links.map((link) => {
          const isAnchor = link.href.includes("#");

          return (
            <li key={`${title}-${link.label}`}>
              <Link
                href={link.href}
                scroll={!isAnchor}
                className="group flex items-center gap-3 text-gray-300 transition-all duration-300 hover:text-orange-400"
              >
                {link.icon && (
                  <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
                    {link.icon}
                  </span>
                )}

                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}