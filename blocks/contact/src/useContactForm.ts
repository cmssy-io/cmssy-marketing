"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { type GraphQLResponse, SUBMIT_FORM_MUTATION } from "./query";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  website: string;
}

export function useContactForm(
  formId: string | undefined,
  errorMessage: string,
) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setError(null);

    if (!formId) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      form.reset();
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
              data: { name: data.name, email: data.email, message: data.message },
              website: data.website || null,
            },
          },
        }),
      });

      const result: GraphQLResponse = await response.json();
      const serverError =
        result.errors?.[0]?.message ??
        ((!result.data?.submitForm?.success && result.data?.submitForm?.message) ||
        null);

      if (serverError) {
        setError(serverError || errorMessage);
        return;
      }

      setIsSuccess(true);
      form.reset();
    } catch {
      setError(errorMessage);
    }
  });

  return { form, onSubmit, isSuccess, error };
}
