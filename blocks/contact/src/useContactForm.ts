"use client";

import { type FormEvent, useCallback, useState } from "react";
import { type GraphQLResponse, SUBMIT_FORM_MUTATION } from "./query";

export function useContactForm(
  formId: string | undefined,
  errorMessage: string,
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);

      const form = e.currentTarget;
      const formData = new FormData(form);

      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;
      const website = formData.get("website") as string;

      // If no workspace or form - demo mode
      if (!formId) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSuccess(true);
        form.reset();
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("/api/public-graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: SUBMIT_FORM_MUTATION,
            variables: {
              formId,
              input: {
                data: { name, email, message },
                website: website || null,
              },
            },
          }),
        });

        const result: GraphQLResponse = await response.json();

        if (result.errors && result.errors.length > 0) {
          setError(result.errors[0].message);
        } else if (result.data?.submitForm?.success) {
          setIsSuccess(true);
          form.reset();
        } else {
          setError(result.data?.submitForm?.message || errorMessage);
        }
      } catch {
        setError(errorMessage);
      }

      setIsSubmitting(false);
    },
    [formId, errorMessage],
  );

  return { isSubmitting, isSuccess, error, handleSubmit };
}
