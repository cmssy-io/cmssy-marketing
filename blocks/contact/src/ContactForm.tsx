import type { FormField } from "./query";

const inputClassName =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

interface ContactFormProps {
  fields: FormField[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string | null;
  isSubmitting: boolean;
  submitButtonText: string;
  submitLoadingText: string;
  getLocalized: (
    field: Record<string, string> | string | null | undefined,
    fallback?: string,
  ) => string;
}

export function ContactForm({
  fields,
  onSubmit,
  error,
  isSubmitting,
  submitButtonText,
  submitLoadingText,
  getLocalized,
}: ContactFormProps) {
  const sortedFields = [...fields].sort((a, b) => a.order - b.order);

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex={-1}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      {error && (
        <div className="rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      {sortedFields.map((field) => {
        const label = getLocalized(field.label, field.name);
        const placeholder = getLocalized(field.placeholder);
        const helpText = getLocalized(field.helpText);
        const isRequired = field.validation?.required ?? false;
        const isTextarea =
          field.fieldType === "textarea" || field.fieldType === "multiLine";
        const inputType =
          field.fieldType === "email"
            ? "email"
            : field.fieldType === "phone"
              ? "tel"
              : field.fieldType === "url"
                ? "url"
                : field.fieldType === "number"
                  ? "number"
                  : "text";

        return (
          <div
            key={field.id}
            className={
              field.width === "half"
                ? "inline-block w-[calc(50%-0.5rem)] align-top mr-4 last:mr-0"
                : ""
            }
          >
            <div className="space-y-2">
              <label
                htmlFor={field.name}
                className="text-sm font-medium leading-none"
              >
                {label}
                {isRequired && <span className="text-destructive ml-1">*</span>}
              </label>

              {isTextarea ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={isRequired}
                  placeholder={placeholder}
                  rows={5}
                  minLength={field.validation?.minLength ?? undefined}
                  maxLength={field.validation?.maxLength ?? undefined}
                  className={`${inputClassName} min-h-20`}
                />
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={inputType}
                  required={isRequired}
                  placeholder={placeholder}
                  minLength={field.validation?.minLength ?? undefined}
                  maxLength={field.validation?.maxLength ?? undefined}
                  className={inputClassName}
                />
              )}

              {helpText && (
                <p className="text-xs text-muted-foreground">{helpText}</p>
              )}
            </div>
          </div>
        );
      })}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? submitLoadingText : submitButtonText}
      </button>
    </form>
  );
}
