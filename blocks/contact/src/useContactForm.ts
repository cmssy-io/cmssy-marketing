"use client";

import { useCallback, useEffect, useState } from "react";
import {
  type FormDefinition,
  type GraphQLResponse,
  type PublicFormResponse,
  PUBLIC_FORM_QUERY,
  SUBMIT_FORM_MUTATION,
} from "./query";

function getLocalized(
  field: Record<string, string> | string | null | undefined,
  fallback = "",
): string {
  if (!field) return fallback;
  if (typeof field === "string") return field;
  return field["en"] || Object.values(field)[0] || fallback;
}

export function useContactForm(formId: string | undefined) {
  const [formDef, setFormDef] = useState<FormDefinition | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch form definition
  useEffect(() => {
    if (!formId) return;

    setLoading(true);
    fetch("/api/public-graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: PUBLIC_FORM_QUERY,
        variables: { formId },
      }),
    })
      .then((res) => res.json())
      .then((result: PublicFormResponse) => {
        if (result.data?.publicForm) {
          setFormDef(result.data.publicForm);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [formId]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      const form = e.currentTarget;
      const formData = new FormData(form);

      // Honeypot
      const website = formData.get("website") as string;
      if (website) {
        setIsSubmitting(false);
        return;
      }

      // Demo mode
      if (!formId) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSuccess(true);
        form.reset();
        setIsSubmitting(false);
        return;
      }

      // Collect data by field name
      const data: Record<string, string> = {};
      if (formDef?.fields) {
        for (const field of formDef.fields) {
          const value = formData.get(field.name) as string;
          if (value) data[field.name] = value;
        }
      }

      const errorMsg = getLocalized(
        formDef?.settings?.errorMessage,
        "Something went wrong. Please try again.",
      );

      try {
        const response = await fetch("/api/public-graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: SUBMIT_FORM_MUTATION,
            variables: {
              formId,
              input: { data, website: null },
            },
          }),
        });

        const result: GraphQLResponse = await response.json();

        if (result.errors?.length) {
          setError(result.errors[0].message);
        } else if (result.data?.submitForm?.success) {
          setIsSuccess(true);
          form.reset();
        } else {
          setError(result.data?.submitForm?.message || errorMsg);
        }
      } catch {
        setError(errorMsg);
      }

      setIsSubmitting(false);
    },
    [formId, formDef],
  );

  return {
    formDef,
    loading,
    isSubmitting,
    isSuccess,
    error,
    handleSubmit,
    getLocalized,
  };
}
