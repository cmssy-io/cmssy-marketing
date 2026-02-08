"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BlockContent } from "./block";
interface NavItem {
  label: string;
  url: string;
  openInNewTab?: boolean;
}

interface PlatformContext {
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
}

interface HeaderProps {
  content: BlockContent;
  context?: PlatformContext;
}

export default function Header({ content, context }: HeaderProps) {
  const {
    logo,
    logoText = "Brand",
    logoSize = "md",
    navigation = [],
    showCta = true,
    ctaLabel = "Get Started",
    ctaUrl = "/signup",
    showSecondaryCta = false,
    secondaryCtaLabel = "Log in",
    secondaryCtaUrl = "/login",
    showAnnouncement = false,
    announcementText = "",
    announcementLink = "",
    announcementBg = "#7c3aed",
    announcementTextColor = "#ffffff",
    announcementDismissible = true,
  } = content;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  const isAuthenticated = context?.auth?.isAuthenticated ?? false;
  const customer = context?.auth?.customer;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobileMenuOpen]);

  const logoSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const logoTextSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const showAnnouncementBar =
    showAnnouncement && announcementText && !announcementDismissed;

  const getUserInitial = () => {
    if (customer?.profile?.displayName) {
      return customer.profile.displayName[0].toUpperCase();
    }
    if (customer?.profile?.firstName) {
      return customer.profile.firstName[0].toUpperCase();
    }
    if (customer?.email) {
      return customer.email[0].toUpperCase();
    }
    return "U";
  };

  const getUserDisplayName = () => {
    if (customer?.profile?.displayName) {
      return customer.profile.displayName;
    }
    if (customer?.profile?.firstName && customer?.profile?.lastName) {
      return `${customer.profile.firstName} ${customer.profile.lastName}`;
    }
    if (customer?.profile?.firstName) {
      return customer.profile.firstName;
    }
    return customer?.email ?? "";
  };

  const handleLogout = async () => {
    if (context?.auth?.logout) {
      await context.auth.logout();
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      {showAnnouncementBar && (
        <div
          className="relative w-full text-center text-sm py-2 px-4"
          style={{
            backgroundColor: announcementBg,
            color: announcementTextColor,
          }}
        >
          {announcementLink ? (
            <Link href={announcementLink} className="hover:underline">
              {announcementText}
            </Link>
          ) : (
            <span>{announcementText}</span>
          )}
          {announcementDismissible && (
            <button
              onClick={() => setAnnouncementDismissed(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
              aria-label="Dismiss announcement"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-lg border-b shadow-sm" : "bg-background border-b"}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              {logo ? (
                <Image
                  src={logo}
                  alt={logoText}
                  className={`${logoSizeClasses[logoSize]} object-contain`}
                  width={120}
                  height={40}
                />
              ) : (
                <div
                  className={`${logoSizeClasses[logoSize]} rounded-lg bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm">
                    {logoText.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className={`font-bold ${logoTextSizeClasses[logoSize]}`}>
                {logoText}
              </span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-8">
              {(navigation as NavItem[]).map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target={item.openInNewTab ? "_blank" : undefined}
                  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4">
              {isAuthenticated && customer ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    {customer.profile?.avatarUrl ? (
                      <Image
                        src={customer.profile.avatarUrl}
                        alt={getUserDisplayName()}
                        className="w-8 h-8 rounded-full object-cover"
                        width={32}
                        height={32}
                      />
                    ) : (
                      <span className="text-sm font-medium">
                        {getUserInitial()}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  {showSecondaryCta && (
                    <Link
                      href={secondaryCtaUrl}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {secondaryCtaLabel}
                    </Link>
                  )}
                  {showCta && (
                    <Link
                      href={ctaUrl}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white transition-colors"
                    >
                      {ctaLabel}
                    </Link>
                  )}
                </>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2 rounded-md hover:bg-muted/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="px-4 pb-6 pt-2 border-t bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col gap-1">
              {(navigation as NavItem[]).map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target={item.openInNewTab ? "_blank" : undefined}
                  rel={item.openInNewTab ? "noopener noreferrer" : undefined}
                  className="py-3 px-3 -mx-3 rounded-lg text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-4 mt-4 border-t">
              {isAuthenticated && customer ? (
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      {customer.profile?.avatarUrl ? (
                        <Image
                          src={customer.profile.avatarUrl}
                          alt={getUserDisplayName()}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-medium">
                          {getUserInitial()}
                        </span>
                      )}
                    </div>
                    <span className="text-sm font-medium truncate max-w-45">
                      {getUserDisplayName()}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Log out
                  </button>
                </div>
              ) : (
                <>
                  {showSecondaryCta && (
                    <Link
                      href={secondaryCtaUrl}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {secondaryCtaLabel}
                    </Link>
                  )}
                  {showCta && (
                    <Link
                      href={ctaUrl}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-linear-to-r from-violet-600 to-purple-600 text-white transition-colors"
                    >
                      {ctaLabel}
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
