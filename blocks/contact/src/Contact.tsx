import { useState, FormEvent, useCallback } from "react";
import { BlockContent } from "./block";

interface BlockContext {
  auth?: {
    isAuthenticated: boolean;
    customer: {
      id: string;
      email: string;
      profile: {
        firstName?: string | null;
        lastName?: string | null;
        displayName?: string | null;
        avatarUrl?: string | null;
      };
    } | null;
    logout: () => Promise<void>;
  };
  language: string;
  isPreview?: boolean;
  workspace?: {
    id: string;
    name?: string;
  };
}

// Icons as inline SVG components
function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
      />
    </svg>
  );
}

// GraphQL mutation for contact form
const SUBMIT_CONTACT_FORM_MUTATION = `
  mutation SubmitContactForm($input: WorkspaceContactInput!, $workspaceId: String!, $autoResponseTemplateId: String) {
    submitContactForm(input: $input, workspaceId: $workspaceId, autoResponseTemplateId: $autoResponseTemplateId) {
      success
      message
    }
  }
`;

interface GraphQLResponse {
  data?: {
    submitContactForm?: {
      success: boolean;
      message: string;
    };
  };
  errors?: Array<{ message: string }>;
}

export default function Contact({
  content,
  context,
}: {
  content: BlockContent;
  context?: BlockContext;
}) {
  const {
    badgeText = "Contact Us",
    heading = "Let's",
    headingHighlight = "talk",
    description = "Have a question, feedback, or just want to say hello? We'd love to hear from you.",
    emailTitle = "Email Us",
    emailDescription = "Drop us a line anytime. We typically respond within 24 hours.",
    responseTitle = "Response Time",
    responseDescription = "We aim to respond to all inquiries within 24-48 hours during business days.",
    locationTitle = "Location",
    locationDescription = "We're a remote-first team working across Europe.",
    showQuote = true,
    quoteText = "Building the future of content management, one pixel at a time.",
    quoteAuthor = "The Cmssy Team",
    emailConfigurationId,
    submitButtonText = "Send Message",
    successMessage = "Thank you for reaching out! We'll get back to you as soon as possible.",
    // Auto-response settings
    enableAutoResponse = false,
    autoResponseTemplateId,
  } = content;

  const workspaceId = context?.workspace?.id;

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

      // If no workspace or email configuration - demo mode
      if (!workspaceId || !emailConfigurationId) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSuccess(true);
        form.reset();
        setIsSubmitting(false);
        return;
      }

      try {
        const response = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: SUBMIT_CONTACT_FORM_MUTATION,
            variables: {
              workspaceId,
              input: {
                name,
                email,
                message,
                emailConfigurationId,
                website: website || null,
              },
              autoResponseTemplateId: enableAutoResponse && autoResponseTemplateId ? autoResponseTemplateId : null,
            },
          }),
        });

        const result: GraphQLResponse = await response.json();

        if (result.errors && result.errors.length > 0) {
          setError(result.errors[0].message);
        } else if (result.data?.submitContactForm?.success) {
          setIsSuccess(true);
          form.reset();
        } else {
          setError(
            result.data?.submitContactForm?.message ||
              "Something went wrong. Please try again."
          );
        }
      } catch {
        setError("Failed to send message. Please try again.");
      }

      setIsSubmitting(false);
    },
    [workspaceId, emailConfigurationId, enableAutoResponse, autoResponseTemplateId]
  );

  return (
    <section className="relative min-h-screen py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {badgeText && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-sm font-medium mb-6">
              {badgeText}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {heading}{" "}
            {headingHighlight && (
              <span className="bg-linear-to-r from-violet-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                {headingHighlight}
              </span>
            )}
          </h1>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {/* Email Card */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <MailIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{emailTitle}</h3>
                  <p className="text-muted-foreground text-sm">
                    {emailDescription}
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <ClockIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{responseTitle}</h3>
                  <p className="text-muted-foreground text-sm">
                    {responseDescription}
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <MapPinIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{locationTitle}</h3>
                  <p className="text-muted-foreground text-sm">
                    {locationDescription}
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            {showQuote && quoteText && (
              <div className="hidden lg:block pt-8">
                <div className="p-6 rounded-2xl bg-linear-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200/50 dark:border-violet-800/30">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;{quoteText}&rdquo;
                  </p>
                  {quoteAuthor && (
                    <p className="text-sm font-medium mt-2 bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      — {quoteAuthor}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border shadow-xl shadow-violet-500/5 p-6 sm:p-8">
              {isSuccess ? (
                <div className="rounded-lg border bg-card p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                    <SendIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">{successMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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

                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : submitButtonText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
