"use client";

import type { ReactNode } from "react";

import { Button } from "@/components/ui/Button";
import {
  trackEvent,
  type AnalyticsEventName,
} from "@/lib/analytics/events";

type AnalyticsData = Record<
  string,
  string | number | boolean | null | undefined
>;

type TrackedButtonProps = {
  href: string;
  eventName: AnalyticsEventName;
  eventData?: AnalyticsData;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
};

export function TrackedButton({
  href,
  eventName,
  eventData,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
}: TrackedButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      aria-label={ariaLabel}
      onClick={() => {
        trackEvent(eventName, eventData);
      }}
    >
      {children}
    </Button>
  );
}