"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, LoaderCircle } from "lucide-react";

import { common as englishCommon } from "@/content/en/common";
import { common as spanishCommon } from "@/content/es/common";
import { routes } from "@/config/routes";
import type { Locale } from "@/lib/i18n/config";

type EstimateFormProps = {
  locale: Locale;
  submitLabel?: string;
};

type SubmitStatus = "idle" | "submitting" | "error";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  zip: string;

  projectType: string;

  budget: string | null;

  desiredStartDate: string | null;

  details: string | null;

  language: "en" | "es";

  source: string;

  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;

  gclid: string | null;

  landingPage: string;

  referrer: string | null;

  website: string;
};

function emptyToNull(
  value:
    | FormDataEntryValue
    | null
    | undefined,
): string | null {
  if (
    value === null ||
    value === undefined ||
    value instanceof File
  ) {
    return null;
  }

  const normalized = value.trim();

  return normalized.length > 0
    ? normalized
    : null;
}


export function EstimateForm({
  locale,
  submitLabel,
}: EstimateFormProps) {
  const router = useRouter();

  const [status, setStatus] =
    useState<SubmitStatus>("idle");

  const [errorMessage, setErrorMessage] =
    useState<string | null>(null);

  const dictionary =
    locale === "en"
      ? englishCommon
      : spanishCommon;

  const form = dictionary.forms;

  const thankYouUrl =
    locale === "en"
      ? routes.en.thankYou
      : routes.es.thankYou;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const formElement = event.currentTarget;

    if (!formElement.reportValidity()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(formElement);
    const searchParams = new URLSearchParams(
      window.location.search,
    );

    const payload: LeadPayload = {
      name: String(
        formData.get("name") ?? "",
      ).trim(),

      phone: String(
        formData.get("phone") ?? "",
      ).trim(),

      email: String(
        formData.get("email") ?? "",
      ).trim(),

      zip: String(
        formData.get("zip") ??
          formData.get("zipCode") ??
          formData.get("postalCode") ??
          "",
      ).trim(),

      projectType: String(
        formData.get("projectType") ??
          formData.get("serviceType") ??
          "",
      ).trim(),

      budget: emptyToNull(
        formData.get("budget") ??
          formData.get("budgetRange"),
      ),

        desiredStartDate: emptyToNull(
          formData.get("desiredStartDate") ??
            formData.get("startDate"),
        ),

      details: emptyToNull(
        formData.get("details") ??
          formData.get("projectDetails"),
      ),

      language: locale,

      source: "website",

      utmSource:
        searchParams.get("utm_source"),

      utmMedium:
        searchParams.get("utm_medium"),

      utmCampaign:
        searchParams.get("utm_campaign"),

      utmContent:
        searchParams.get("utm_content"),

      gclid:
        searchParams.get("gclid"),

      landingPage:
        window.location.href,

      referrer:
        document.referrer || null,

      website: String(
        formData.get("website") ?? "",
      ),
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(
          "Lead submission failed",
        );
      }

      formElement.reset();

      router.push(thankYouUrl);
    } catch {
      setStatus("error");

      setErrorMessage(
        form.error.message,
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
    >
      <div>
        <h3 className="font-sans text-2xl font-bold tracking-normal text-charcoal-950 sm:text-3xl">
          {form.estimateTitle}
        </h3>

        <p className="mt-2 text-sm leading-6 text-charcoal-600">
          {locale === "en"
            ? "Complete the form below and tell us a little about your project."
            : "Completa el formulario y cuéntanos un poco sobre tu proyecto."}
        </p>
      </div>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-name"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.name}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <input
            id="estimate-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            placeholder={form.placeholders.name}
            className="min-h-12 px-4 py-3"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-phone"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.phone}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <input
            id="estimate-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            maxLength={30}
            placeholder={form.placeholders.phone}
            className="min-h-12 px-4 py-3"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-email"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.email}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <input
            id="estimate-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder={form.placeholders.email}
            className="min-h-12 px-4 py-3"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-zip"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.zipCode}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <input
            id="estimate-zip"
            name="zip"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            required
            minLength={5}
            maxLength={10}
            pattern="[0-9]{5}(-[0-9]{4})?"
            placeholder={form.placeholders.zipCode}
            className="min-h-12 px-4 py-3"
          />
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-project-type"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.projectType}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <select
            id="estimate-project-type"
            name="projectType"
            required
            defaultValue=""
            className="min-h-12 px-4 py-3"
          >
            <option value="" disabled>
              {form.placeholders.projectType}
            </option>

            <option value="kitchen-remodeling">
              {form.projectTypes.kitchen}
            </option>

            <option value="bathroom-remodeling">
              {form.projectTypes.bathroom}
            </option>

            <option value="interior-remodeling">
              {form.projectTypes.interior}
            </option>

            <option value="flooring">
              {form.projectTypes.flooring}
            </option>

            <option value="drywall">
              {form.projectTypes.drywall}
            </option>

            <option value="painting">
              {form.projectTypes.painting}
            </option>

            <option value="siding">
              {form.projectTypes.siding}
            </option>

            <option value="windows-doors">
              {form.projectTypes.windowsDoors}
            </option>

            <option value="patios">
              {form.projectTypes.patios}
            </option>

            <option value="pergolas">
              {form.projectTypes.pergolas}
            </option>

            <option value="general-repairs">
              {form.projectTypes.generalRepairs}
            </option>

            <option value="other">
              {form.projectTypes.other}
            </option>
          </select>
        </div>

        <div className="sm:col-span-1">
          <label
            htmlFor="estimate-budget"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.budgetRange}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <select
            id="estimate-budget"
            name="budgetRange"
            required
            defaultValue=""
            className="min-h-12 px-4 py-3"
          >
            <option value="" disabled>
              {form.placeholders.budgetRange}
            </option>

            <option value="under-10k">
              {form.budgets.under10k}
            </option>

            <option value="10k-25k">
              {form.budgets.from10kTo25k}
            </option>

            <option value="25k-50k">
              {form.budgets.from25kTo50k}
            </option>

            <option value="50k-100k">
              {form.budgets.from50kTo100k}
            </option>

            <option value="100k-plus">
              {form.budgets.over100k}
            </option>

            <option value="not-sure">
              {form.budgets.notSure}
            </option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="estimate-start-date"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.desiredStartDate}
          </label>

          <input
            id="estimate-start-date"
            name="desiredStartDate"
            type="date"
            className="min-h-12 px-4 py-3"
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="estimate-details"
            className="mb-2 block text-sm font-semibold text-charcoal-900"
          >
            {form.fields.projectDetails}
            <span
              aria-hidden="true"
              className="ml-1 text-brand-700"
            >
              *
            </span>
          </label>

          <textarea
            id="estimate-details"
            name="projectDetails"
            required
            minLength={10}
            maxLength={3000}
            rows={6}
            placeholder={
              form.placeholders.projectDetails
            }
            className="px-4 py-3"
          />
        </div>
      </div>

      <p className="text-xs leading-5 text-charcoal-500">
        {form.privacy}
      </p>

      {status === "error" && errorMessage ? (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800"
        >
          <strong className="block">
            {form.error.title}
          </strong>

          <span>{errorMessage}</span>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 active:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <LoaderCircle
              aria-hidden="true"
              className="size-5 animate-spin"
            />

            {dictionary.actions.sending}
          </>
        ) : (
          <>
            <CheckCircle2
              aria-hidden="true"
              className="size-5"
            />

            {submitLabel ??
              dictionary.actions.getFreeEstimate}
          </>
        )}
      </button>
    </form>
  );
}