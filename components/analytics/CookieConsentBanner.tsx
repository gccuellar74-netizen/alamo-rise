"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "rejected";

const STORAGE_KEY = "alamo-rise-cookie-consent";

function updateGoogleConsent(choice: ConsentChoice) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "consent_update",
    consent_choice: choice,
  });

  const granted = choice === "accepted" ? "granted" : "denied";

  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args as never);
  }

  gtag("consent", "update", {
    ad_storage: granted,
    analytics_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
  });
}

export function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const savedChoice = window.localStorage.getItem(
    STORAGE_KEY,
  ) as ConsentChoice | null;

  if (savedChoice) {
    updateGoogleConsent(savedChoice);
    return;
  }

  const timeoutId = window.setTimeout(() => {
    setIsVisible(true);
  }, 0);

  return () => {
    window.clearTimeout(timeoutId);
  };
}, []);

  function handleChoice(choice: ConsentChoice) {
    window.localStorage.setItem(STORAGE_KEY, choice);

    updateGoogleConsent(choice);

    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-charcoal-200 bg-white/95 shadow-elevated backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-charcoal-950">
            Cookie preferences
          </p>

          <p className="mt-1 text-sm leading-6 text-charcoal-600">
            We use analytics and advertising technologies to
            understand site usage and improve marketing
            performance. You can accept or reject optional
            cookies.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="min-h-11 rounded-md border border-charcoal-300 bg-white px-5 py-2.5 text-sm font-semibold text-charcoal-950 transition-colors hover:bg-charcoal-50"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="min-h-11 rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}