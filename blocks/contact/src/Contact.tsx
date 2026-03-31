"use client";

import type { PlatformContext } from "@cmssy/cli/config";
import { Container } from "../../../components/container";
import type { BlockContent } from "./block";
import { SendIcon } from "./icons";
import { InfoCard } from "./InfoCard";
import { useContactForm } from "./useContactForm";

interface Props {
  content: BlockContent;
  context?: PlatformContext;
}

export default function Contact({ content }: Props) {
  const {
    badgeText = "Contact Us",
    heading = "Let's",
    headingHighlight = "talk",
    description = "Have a question, feedback, or just want to say hello? We'd love to hear from you.",
    infoCards = [
      {
        title: "Email Us",
        description:
          "Drop us a line anytime. We typically respond within 24 hours.",
      },
      {
        title: "Response Time",
        description:
          "We aim to respond to all inquiries within 24-48 hours during business days.",
      },
      {
        title: "Location",
        description: "We're a remote-first team working across Europe.",
      },
    ],
    showQuote = true,
    quoteText = "Building the future of content management, one pixel at a time.",
    quoteAuthor = "The Cmssy Team",
    nameLabel = "Name",
    emailLabel = "Email",
    messageLabel = "Message",
    formId,
    submitButtonText = "Send Message",
    submitLoadingText = "Sending...",
    successHeading = "Message Sent!",
    errorMessage = "Something went wrong. Please try again.",
    successMessage = "Thank you for reaching out! We'll get back to you as soon as possible.",
  } = content;

  const { isSubmitting, isSuccess, error, handleSubmit } = useContactForm(
    formId,
    errorMessage,
  );

  const hasQuote = showQuote && quoteText;

  return (
    <section className="relative min-h-screen py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20" />
      <div className="absolute top-0 right-0 w-125 h-125 bg-violet-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-purple-400/20 rounded-full blur-3xl" />

      <Container className="relative">
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
              {(
                infoCards as Array<{
                  icon?: string;
                  title?: string;
                  description?: string;
                }>
              ).map((card, index) => (
                <InfoCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  index={index}
                />
              ))}
            </div>

            {/* Quote */}
            {hasQuote && (
              <div className="hidden lg:block pt-8">
                <div className="p-6 rounded-2xl bg-linear-to-br from-violet-100 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 border border-violet-200/50 dark:border-violet-800/30">
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;{quoteText}&rdquo;
                  </p>
                  {quoteAuthor && (
                    <p className="text-sm font-medium mt-2 bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                      - {quoteAuthor}
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
                  <h3 className="mb-2 text-lg font-semibold">
                    {successHeading}
                  </h3>
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
                    className="absolute -left-2499.75 h-0 w-0 opacity-0"
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
                      {nameLabel}
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
                      {emailLabel}
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
                      {messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50 transition-colors"
                  >
                    {isSubmitting ? submitLoadingText : submitButtonText}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
