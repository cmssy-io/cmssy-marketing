import { useFormContext } from "react-hook-form";
import type { ContactFormData } from "./useContactForm";

const inputClassName =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
  error: string | null;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitButtonText: string;
  submitLoadingText: string;
}

export function ContactForm({
  onSubmit,
  error,
  nameLabel,
  emailLabel,
  messageLabel,
  submitButtonText,
  submitLoadingText,
}: ContactFormProps) {
  const { register, formState } = useFormContext<ContactFormData>();

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        {...register("website")}
        type="text"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-2499.75 h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          {nameLabel}
        </label>
        <input
          {...register("name", { required: true })}
          id="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          {emailLabel}
        </label>
        <input
          {...register("email", { required: true })}
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className={inputClassName}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          {messageLabel}
        </label>
        <textarea
          {...register("message", { required: true })}
          id="message"
          rows={5}
          placeholder="How can we help you?"
          className={`${inputClassName} min-h-20`}
        />
      </div>

      <button
        type="submit"
        disabled={formState.isSubmitting}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
      >
        {formState.isSubmitting ? submitLoadingText : submitButtonText}
      </button>
    </form>
  );
}
