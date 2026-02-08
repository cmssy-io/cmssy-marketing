import { defineTemplate } from "@cmssy/cli/config";

export default defineTemplate({
  name: "Marketing Site",
  description:
    "Complete marketing website template with 25+ pre-built pages including homepage, about, features, pricing, contact, documentation, auth flows, and more.",
  category: "website",
  tags: [
    "marketing",
    "saas",
    "landing",
    "business",
    "startup",
    "complete",
    "multi-page",
    "docs",
    "auth",
  ],

  pages: [
    // ─── HOMEPAGE ───────────────────────────────────────────────
    {
      name: "Home",
      slug: "/",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "AI-Powered Page Builder",
            heading: "Build reusable UI blocks",
            headingHighlight: "without limits",
            subheading:
              "The modern CMS that makes website creation effortless. Define schemas, compose pages, and publish — all from your codebase.",
            primaryButtonText: "Start Building Free",
            primaryButtonUrl: "/signup",
            secondaryButtonText: "View Documentation",
            secondaryButtonUrl: "/docs",
            socialProofCount: "2,000+",
            socialProofText: "creators already building with cmssy",
          },
        },
        {
          type: "features",
          content: {
            heading: "Everything you need to",
            headingHighlight: "ship faster",
            description:
              "A block-based CMS built for developers who want full control over their UI while giving editors a visual content experience.",
            features: [
              {
                title: "Block-Based Architecture",
                description:
                  "Build self-contained React components with typed schemas. Each block has its own config, styles, and preview data.",
                icon: "BlocksIcon",
              },
              {
                title: "Visual Content Editor",
                description:
                  "Editors fill in content through an intuitive UI generated from your schema — no code changes needed.",
                icon: "SparklesIcon",
              },
              {
                title: "Tailwind CSS v4",
                description:
                  "CSS-first configuration with OKLCH colors, @theme inline, and all the latest Tailwind v4 features built in.",
                icon: "PaintBrushIcon",
              },
              {
                title: "Type-Safe Schemas",
                description:
                  "defineBlock and defineTemplate APIs give you full TypeScript autocompletion for every field type.",
                icon: "ShieldCheckIcon",
              },
              {
                title: "Instant Preview",
                description:
                  "Run cmssy dev and see every block live with hot-reload. Edit content in real-time from the sidebar.",
                icon: "ZapIcon",
              },
              {
                title: "Customer Auth & Email",
                description:
                  "Built-in login, register, profile, and email configuration blocks — ready for customer-facing sites.",
                icon: "UsersIcon",
              },
            ],
          },
        },
        {
          type: "cta",
          content: {
            badgeText: "Start building today",
            heading: "Ready to create something",
            headingLine2: "amazing?",
            description:
              "Join thousands of creators who trust cmssy to build their online presence. Start free, no credit card required.",
            primaryButtonText: "Get Started Free",
            primaryButtonUrl: "/signup",
            secondaryButtonText: "Talk to Sales",
            secondaryButtonUrl: "/contact",
          },
        },
      ],
    },

    // ─── ABOUT ──────────────────────────────────────────────────
    {
      name: "About",
      slug: "/about",
      blocks: [
        {
          type: "about",
          content: {
            badgeText: "About Us",
            heading: "Building the future of",
            headingHighlight: "content management",
            subtitle:
              "We're on a mission to make professional website creation accessible to everyone, powered by modern technology and developer-first tools.",
            missionText:
              "We believe that creating beautiful, professional websites shouldn't require expensive agencies or monolithic platforms. Cmssy empowers creators, businesses, and developers to build stunning websites with block-based architecture, intuitive schemas, and enterprise-grade performance — all from their own codebase.",
            values: [
              {
                icon: "sparkles",
                title: "Developer Experience First",
                description:
                  "TypeScript, hot-reload, and schema autocompletion — building blocks should feel natural.",
              },
              {
                icon: "heart",
                title: "Content Editors Matter",
                description:
                  "Every schema generates an intuitive visual editor. No developer needed for content updates.",
              },
              {
                icon: "users",
                title: "Community Driven",
                description:
                  "Open block ecosystem where creators share and remix components freely.",
              },
              {
                icon: "shield",
                title: "Own Your Code",
                description:
                  "No vendor lock-in. Your blocks are React components in your repo — always portable.",
              },
            ],
            showTechStack: true,
            techStack: [
              { name: "React 19", category: "Frontend" },
              { name: "Next.js 16", category: "Framework" },
              { name: "Tailwind CSS v4", category: "Styling" },
              { name: "TypeScript", category: "Language" },
              { name: "OKLCH Colors", category: "Design" },
              { name: "shadcn/ui", category: "Components" },
            ],
          },
        },
      ],
    },

    // ─── FEATURES ───────────────────────────────────────────────
    {
      name: "Features",
      slug: "/features",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Features",
            heading: "Powerful features for",
            headingHighlight: "modern teams",
            subheading:
              "Discover all the tools and primitives that make cmssy the best developer-first CMS.",
            primaryButtonText: "Get Started",
            primaryButtonUrl: "/signup",
            secondaryButtonText: "View Pricing",
            secondaryButtonUrl: "/pricing",
          },
        },
        {
          type: "features",
          content: {
            heading: "Built for",
            headingHighlight: "productivity",
            description:
              "Every feature is designed to help you ship faster without sacrificing quality.",
            features: [
              {
                title: "defineBlock API",
                description:
                  "Declare your block schema, metadata, and pricing in a single config file with full TypeScript support.",
                icon: "BlocksIcon",
              },
              {
                title: "defineTemplate API",
                description:
                  "Compose blocks into multi-page templates with layout positions, shared headers/footers, and page metadata.",
                icon: "LayersIcon",
              },
              {
                title: "12+ Schema Field Types",
                description:
                  "singleLine, multiLine, richText, boolean, select, media, link, repeater, numeric, date, color, and more.",
                icon: "CogIcon",
              },
              {
                title: "Conditional Fields",
                description:
                  "Use showWhen to conditionally display fields based on other field values. Keep the editor clean.",
                icon: "SparklesIcon",
              },
              {
                title: "Layout Positions",
                description:
                  "Header, footer, and sidebar blocks shared across all pages. Configure once, used everywhere.",
                icon: "GlobeAltIcon",
              },
              {
                title: "Customer Authentication",
                description:
                  "Built-in login, register, forgot-password, and profile blocks with redirect and messaging config.",
                icon: "UsersIcon",
              },
            ],
          },
        },
        {
          type: "cta",
          content: {
            badgeText: "Get started",
            heading: "Start using these features",
            headingLine2: "today",
            description:
              "Install the CLI, scaffold your first block, and see it live in under 5 minutes.",
            primaryButtonText: "Start Free Trial",
            primaryButtonUrl: "/signup",
            secondaryButtonText: "Compare Plans",
            secondaryButtonUrl: "/pricing",
          },
        },
      ],
    },

    // ─── PRICING ────────────────────────────────────────────────
    {
      name: "Pricing",
      slug: "/pricing",
      blocks: [
        {
          type: "pricing",
          content: {
            heading: "Simple,",
            headingHighlight: "transparent pricing",
            description:
              "Choose the plan that fits your needs. All plans include a 14-day free trial.",
            trialNotice:
              "14-day free trial on all paid plans. No credit card required.",
            plans: [
              {
                name: "Starter",
                description: "Perfect for personal projects and experiments.",
                price: "$0",
                period: "forever free",
                popular: false,
                features: [
                  { feature: "Up to 3 projects" },
                  { feature: "All block types" },
                  { feature: "Community support" },
                  { feature: "1GB media storage" },
                  { feature: "cmssy dev & build" },
                ],
                cta: "Get Started",
                href: "/signup",
              },
              {
                name: "Pro",
                description: "For growing teams and production sites.",
                price: "$29",
                period: "per month",
                popular: true,
                features: [
                  { feature: "Unlimited projects" },
                  { feature: "Custom domains" },
                  { feature: "Priority support" },
                  { feature: "50GB media storage" },
                  { feature: "Team collaboration" },
                  { feature: "Email configuration" },
                  { feature: "Customer auth blocks" },
                  { feature: "Analytics dashboard" },
                ],
                cta: "Start Free Trial",
                href: "/signup?plan=pro",
              },
              {
                name: "Enterprise",
                description:
                  "For large organizations with custom requirements.",
                price: "Custom",
                period: "contact us",
                popular: false,
                features: [
                  { feature: "Everything in Pro" },
                  { feature: "Unlimited storage" },
                  { feature: "Dedicated support" },
                  { feature: "Custom integrations" },
                  { feature: "SLA guarantee" },
                  { feature: "On-premise option" },
                  { feature: "SSO & SAML" },
                ],
                cta: "Contact Sales",
                href: "/contact",
              },
            ],
          },
        },
        {
          type: "faq",
          content: {
            heading: "Frequently asked",
            headingHighlight: "questions",
            description: "Have questions? We have answers.",
            faqs: [
              {
                question: "Can I change my plan later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing.",
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes! All paid plans include a 14-day free trial. No credit card required to start.",
              },
              {
                question: "Can I use cmssy with my existing React project?",
                answer:
                  "Absolutely. Cmssy blocks are standard React components with Tailwind CSS. You can integrate them into any Next.js or React project.",
              },
              {
                question: "What happens when my trial ends?",
                answer:
                  "At the end of your trial, you can choose to subscribe to a paid plan or continue with our free Starter plan. No data is deleted.",
              },
            ],
          },
        },
      ],
    },

    // ─── CONTACT ────────────────────────────────────────────────
    {
      name: "Contact",
      slug: "/contact",
      blocks: [
        {
          type: "contact",
          content: {
            badgeText: "Contact Us",
            heading: "Get in",
            headingHighlight: "touch",
            description:
              "Have a question or want to learn more? We'd love to hear from you.",
            infoCards: [
              {
                icon: "mail",
                title: "Email Us",
                description:
                  "Drop us a line anytime. We typically respond within 24 hours.",
              },
              {
                icon: "clock",
                title: "Response Time",
                description:
                  "We aim to respond to all inquiries within 24-48 hours during business days.",
              },
              {
                icon: "globe",
                title: "Location",
                description:
                  "We're a remote-first team working across Europe and North America.",
              },
            ],
            showQuote: true,
            quoteText:
              "Building the future of content management, one block at a time.",
            quoteAuthor: "The Cmssy Team",
            submitButtonText: "Send Message",
            successMessage:
              "Thank you for reaching out! We'll get back to you soon.",
          },
        },
      ],
    },

    // ─── PRIVACY POLICY ─────────────────────────────────────────
    {
      name: "Privacy Policy",
      slug: "/privacy",
      blocks: [
        {
          type: "legal",
          content: {
            badge: "Legal",
            heading: "Privacy",
            headingHighlight: "Policy",
            description:
              "Learn how we collect, use, and protect your personal information.",
            showSummary: true,
            summaryTitle: "TL;DR",
            summaryContent:
              "We respect your privacy and only collect data necessary to provide our services. We never sell your data.",
            sections: [
              {
                title: "Information We Collect",
                content:
                  "<p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support. This includes your name, email address, and payment information.</p>",
              },
              {
                title: "How We Use Your Information",
                content:
                  "<p>We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices, and communicate with you about products, services, and events.</p>",
              },
              {
                title: "Information Sharing",
                content:
                  "<p>We do not sell, trade, or rent your personal information to third parties. We may share information with service providers who assist us in operating our platform, such as payment processors and hosting providers.</p>",
              },
              {
                title: "Data Security",
                content:
                  "<p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest.</p>",
              },
              {
                title: "Your Rights",
                content:
                  "<p>You have the right to access, update, or delete your personal information at any time. You can also request a copy of your data or ask us to restrict processing. Contact us at privacy@cmssy.com to exercise these rights.</p>",
              },
            ],
            showFooterLinks: true,
            footerText: "This policy is part of our",
            footerLinks: [
              { text: "Terms of Service", url: "/terms" },
              { text: "Cookie Policy", url: "/cookies" },
            ],
            lastUpdated: "February 2026",
          },
        },
      ],
    },

    // ─── TERMS OF SERVICE ───────────────────────────────────────
    {
      name: "Terms of Service",
      slug: "/terms",
      blocks: [
        {
          type: "legal",
          content: {
            badge: "Legal",
            heading: "Terms of",
            headingHighlight: "Service",
            description:
              "Please read these terms carefully before using our services.",
            showSummary: true,
            summaryTitle: "TL;DR",
            summaryContent:
              "Use our services responsibly. We provide them as-is and reserve the right to modify or terminate them. Your content remains yours.",
            sections: [
              {
                title: "Acceptance of Terms",
                content:
                  "<p>By accessing or using cmssy services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>",
              },
              {
                title: "Use of Services",
                content:
                  "<p>You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services to build sites that distribute malware, infringe on intellectual property, or violate any applicable law.</p>",
              },
              {
                title: "User Accounts",
                content:
                  "<p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.</p>",
              },
              {
                title: "Content Ownership",
                content:
                  "<p>You retain full ownership of the blocks, templates, and content you create using cmssy. We claim no intellectual property rights over your creations.</p>",
              },
              {
                title: "Limitation of Liability",
                content:
                  "<p>To the fullest extent permitted by law, cmssy shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>",
              },
            ],
            showFooterLinks: true,
            footerText: "This policy is part of our",
            footerLinks: [
              { text: "Privacy Policy", url: "/privacy" },
              { text: "Cookie Policy", url: "/cookies" },
            ],
            lastUpdated: "February 2026",
          },
        },
      ],
    },

    // ─── COOKIE POLICY ──────────────────────────────────────────
    {
      name: "Cookie Policy",
      slug: "/cookies",
      blocks: [
        {
          type: "legal",
          content: {
            badge: "Legal",
            heading: "Cookie",
            headingHighlight: "Policy",
            description:
              "This policy explains how we use cookies and similar technologies.",
            showSummary: true,
            summaryTitle: "TL;DR",
            summaryContent:
              "We use essential cookies to make our site work and analytics cookies to understand how you use it. You can control your preferences.",
            sections: [
              {
                title: "What Are Cookies",
                content:
                  "<p>Cookies are small text files that are placed on your device when you visit a website. They help the website remember your preferences and improve your experience.</p>",
              },
              {
                title: "How We Use Cookies",
                content:
                  "<p>We use cookies to keep you signed in to the cmssy dashboard, remember your editor preferences, understand how you use our platform, and improve our services.</p>",
              },
              {
                title: "Types of Cookies We Use",
                content:
                  "<p><strong>Essential cookies:</strong> Required for the platform to function (authentication, session management).<br/><strong>Analytics cookies:</strong> Help us understand usage patterns and improve the product.<br/><strong>Preference cookies:</strong> Remember your settings like dark mode and editor layout.</p>",
              },
              {
                title: "Managing Cookies",
                content:
                  "<p>Most browsers allow you to control cookies through their settings. However, disabling essential cookies may prevent you from using the cmssy dashboard and editor.</p>",
              },
            ],
            showFooterLinks: true,
            footerText: "This policy is part of our",
            footerLinks: [
              { text: "Privacy Policy", url: "/privacy" },
              { text: "Terms of Service", url: "/terms" },
            ],
            lastUpdated: "February 2026",
          },
        },
      ],
    },

    // ─── ROADMAP ────────────────────────────────────────────────
    {
      name: "Roadmap",
      slug: "/roadmap",
      blocks: [
        {
          type: "roadmap",
          content: {
            badge: "Roadmap",
            heading: "Product",
            headingHighlight: "Roadmap",
            description:
              "Transparency is one of our core values. Here's what we're working on and what's coming next.",
            columns: [
              {
                title: "Completed",
                status: "completed",
                items: [
                  {
                    title: "Block-based architecture",
                    description:
                      "defineBlock API with typed schemas and preview data",
                  },
                  {
                    title: "Template system",
                    description:
                      "defineTemplate with pages.json and layout positions",
                  },
                  {
                    title: "Tailwind CSS v4 integration",
                    description:
                      "CSS-first config with OKLCH colors and @theme inline",
                  },
                  {
                    title: "Documentation blocks",
                    description:
                      "Sidebar, article, code block, callout, and card grid",
                  },
                  {
                    title: "Customer auth blocks",
                    description:
                      "Login, register, forgot-password, and profile forms",
                  },
                ],
              },
              {
                title: "In Progress",
                status: "in_progress",
                items: [
                  {
                    title: "Visual page editor",
                    description:
                      "Drag-and-drop block ordering with live preview",
                    badge: "Q1 2026",
                  },
                  {
                    title: "Email template builder",
                    description:
                      "Design transactional emails with the same block system",
                  },
                  {
                    title: "Media library",
                    description:
                      "Central asset management with image optimization",
                  },
                ],
              },
              {
                title: "Planned",
                status: "planned",
                items: [
                  {
                    title: "AI block generator",
                    description:
                      "Describe a block in natural language and get a working component",
                  },
                  {
                    title: "Block marketplace",
                    description:
                      "Publish and install blocks from the community",
                  },
                  {
                    title: "Multi-language support",
                    description:
                      "i18n content management with locale-aware schemas",
                  },
                  {
                    title: "Version history",
                    description:
                      "Content versioning with diff view and one-click rollback",
                  },
                ],
              },
            ],
            showCta: true,
            ctaTitle: "Shape Our Roadmap",
            ctaDescription:
              "Have a feature request or idea? We'd love to hear from you.",
            ctaButtonText: "Submit Feedback",
            ctaButtonUrl: "/contact",
          },
        },
      ],
    },

    // ─── CHANGELOG ──────────────────────────────────────────────
    {
      name: "Changelog",
      slug: "/changelog",
      blocks: [
        {
          type: "changelog",
          content: {
            badge: "Updates",
            heading: "What's",
            headingHighlight: "New",
            description:
              "Stay up to date with the latest features, improvements, and fixes.",
            entries: [
              {
                version: "2.0.0",
                date: "January 15, 2026",
                title: "Customer Auth & Email Blocks",
                type: "feature",
                changes: [
                  {
                    text: "Added login, register, forgot-password, and customer-profile blocks",
                  },
                  {
                    text: "New emailConfiguration schema field type for form notifications",
                  },
                  {
                    text: "Auto-response email support with template IDs",
                  },
                  {
                    text: "Newsletter form block with subscriber tags and variants",
                  },
                ],
              },
              {
                version: "1.5.0",
                date: "December 1, 2025",
                title: "Documentation Blocks",
                type: "feature",
                changes: [
                  {
                    text: "Added docs-sidebar with pageSelector field type and version selector",
                  },
                  {
                    text: "Added docs-article with rich text content and table of contents",
                  },
                  {
                    text: "Added docs-code-block with syntax highlighting and line highlighting",
                  },
                  {
                    text: "Added docs-callout (info, tip, warning, danger, note)",
                  },
                  {
                    text: "Added docs-card-grid for documentation landing pages",
                  },
                ],
              },
              {
                version: "1.4.0",
                date: "November 10, 2025",
                title: "Legal & Marketing Blocks",
                type: "feature",
                changes: [
                  {
                    text: "Added legal block with accordion sections and summary boxes",
                  },
                  {
                    text: "Added roadmap block with kanban-style columns",
                  },
                  {
                    text: "Added changelog block with version timeline",
                  },
                  {
                    text: "showWhen conditional fields now supported across all blocks",
                  },
                ],
              },
              {
                version: "1.3.1",
                date: "October 20, 2025",
                title: "Bug Fixes & Improvements",
                type: "bugfix",
                changes: [
                  {
                    text: "Fixed header mobile menu not closing on navigation",
                  },
                  {
                    text: "Improved pricing block responsive layout on tablets",
                  },
                  {
                    text: "Fixed FAQ accordion animation on Safari",
                  },
                ],
              },
              {
                version: "1.0.0",
                date: "September 1, 2025",
                title: "Initial Release",
                type: "feature",
                changes: [
                  {
                    text: "Core blocks: hero, features, pricing, FAQ, CTA, about, contact",
                  },
                  {
                    text: "Header and footer layout blocks with sticky and transparent options",
                  },
                  {
                    text: "defineBlock and defineTemplate APIs with full TypeScript support",
                  },
                  {
                    text: "Tailwind CSS v4 integration with OKLCH color system",
                  },
                  { text: "cmssy dev and cmssy build CLI commands" },
                ],
              },
            ],
            showSubscribe: true,
            subscribeText:
              "Subscribe to get notified about new releases and updates",
            subscribeButtonText: "Subscribe",
            subscribeButtonUrl: "/newsletter",
          },
        },
      ],
    },

    // ─── BLOG ───────────────────────────────────────────────────
    {
      name: "Blog",
      slug: "/blog",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Blog",
            heading: "Insights &",
            headingHighlight: "Updates",
            subheading:
              "Guides, tutorials, and insights from the cmssy team on building modern websites.",
            primaryButtonText: "Subscribe",
            primaryButtonUrl: "/newsletter",
            secondaryButtonText: "View Changelog",
            secondaryButtonUrl: "/changelog",
          },
        },
      ],
    },

    // ─── CAREERS ────────────────────────────────────────────────
    {
      name: "Careers",
      slug: "/careers",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Careers",
            heading: "Join our",
            headingHighlight: "team",
            subheading:
              "Help us build the future of content management. We're always looking for talented people to join our mission.",
            primaryButtonText: "View Open Positions",
            primaryButtonUrl: "#positions",
            secondaryButtonText: "Learn About Us",
            secondaryButtonUrl: "/about",
          },
        },
        {
          type: "features",
          content: {
            heading: "Why work",
            headingHighlight: "with us",
            description:
              "We offer more than just a job — we offer a career in developer tools.",
            features: [
              {
                title: "Remote First",
                description:
                  "Work from anywhere in the world with flexible hours and async communication.",
                icon: "GlobeAltIcon",
              },
              {
                title: "Growth Opportunities",
                description:
                  "Conference budgets, learning stipends, and mentorship from senior engineers.",
                icon: "SparklesIcon",
              },
              {
                title: "Competitive Benefits",
                description:
                  "Health insurance, equity, and generous time off in every country we operate.",
                icon: "ShieldCheckIcon",
              },
              {
                title: "Great Team",
                description:
                  "Small, focused team that ships fast and cares deeply about developer experience.",
                icon: "UsersIcon",
              },
            ],
          },
        },
      ],
    },

    // ─── HELP CENTER ────────────────────────────────────────────
    {
      name: "Help Center",
      slug: "/help",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Help Center",
            heading: "How can we",
            headingHighlight: "help?",
            subheading:
              "Find answers to common questions or reach out to our support team.",
            primaryButtonText: "Contact Support",
            primaryButtonUrl: "/contact",
            secondaryButtonText: "View Documentation",
            secondaryButtonUrl: "/docs",
          },
        },
        {
          type: "faq",
          content: {
            heading: "Frequently asked",
            headingHighlight: "questions",
            description: "Quick answers to the most common questions.",
            faqs: [
              {
                question: "How do I get started with cmssy?",
                answer:
                  "Install the CLI with `npm install -g cmssy-cli`, then run `cmssy init` to scaffold your first project. Check the documentation at /docs/installation for a step-by-step guide.",
              },
              {
                question: "How do I create a new block?",
                answer:
                  "Run `cmssy create my-block` to scaffold a new block with a component, schema, styles, and preview data. Then edit block.config.ts to define your content fields.",
              },
              {
                question: "Can I use cmssy with an existing Next.js project?",
                answer:
                  "Yes! Cmssy blocks are standard React components with Tailwind CSS. Install cmssy-cli as a dependency and import blocks directly into your pages.",
              },
              {
                question: "How do I reset my password?",
                answer:
                  "Click 'Forgot Password' on the login page and follow the instructions sent to your email. The reset link expires after 24 hours.",
              },
              {
                question: "How do I contact support?",
                answer:
                  "You can reach our support team through the contact page at /contact or email us directly at support@cmssy.com. We respond within 24-48 hours.",
              },
            ],
          },
        },
      ],
    },

    // ─── API DOCUMENTATION ──────────────────────────────────────
    {
      name: "API Documentation",
      slug: "/api",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "API",
            heading: "Build with our",
            headingHighlight: "API",
            subheading:
              "Integrate cmssy into your applications with our powerful and well-documented REST API.",
            primaryButtonText: "View API Reference",
            primaryButtonUrl: "/docs/api-overview",
            secondaryButtonText: "Get API Key",
            secondaryButtonUrl: "/settings/api",
          },
        },
        {
          type: "features",
          content: {
            heading: "API",
            headingHighlight: "Features",
            description:
              "Everything you need to build powerful integrations with cmssy.",
            features: [
              {
                title: "RESTful Design",
                description:
                  "Clean, predictable REST API following best practices with JSON responses.",
                icon: "CogIcon",
              },
              {
                title: "Webhooks",
                description:
                  "Real-time notifications when content changes, blocks are published, or pages are updated.",
                icon: "ZapIcon",
              },
              {
                title: "Rate Limiting",
                description:
                  "Generous rate limits — 1000 req/min on Pro, unlimited on Enterprise.",
                icon: "ShieldCheckIcon",
              },
              {
                title: "TypeScript SDK",
                description:
                  "Official TypeScript/JavaScript SDK with full type definitions and autocompletion.",
                icon: "LayersIcon",
              },
            ],
          },
        },
      ],
    },

    // ─── SECURITY ───────────────────────────────────────────────
    {
      name: "Security",
      slug: "/security",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Security",
            heading: "Your data is",
            headingHighlight: "secure",
            subheading:
              "We take security seriously. Learn about the measures we take to protect your data and content.",
            primaryButtonText: "View Security Policy",
            primaryButtonUrl: "#security-policy",
            secondaryButtonText: "Contact Security Team",
            secondaryButtonUrl: "/contact",
          },
        },
        {
          type: "features",
          content: {
            heading: "Security",
            headingHighlight: "Features",
            description:
              "Enterprise-grade security for all cmssy users, on every plan.",
            features: [
              {
                title: "Encryption",
                description:
                  "All data encrypted in transit (TLS 1.3) and at rest (AES-256). API tokens are hashed.",
                icon: "LockClosedIcon",
              },
              {
                title: "SOC 2 Compliance",
                description:
                  "We maintain SOC 2 Type II compliance. Audit reports available for Enterprise customers.",
                icon: "ShieldCheckIcon",
              },
              {
                title: "Regular Audits",
                description:
                  "Independent security audits and penetration testing performed quarterly.",
                icon: "ChartBarIcon",
              },
              {
                title: "Two-Factor Auth",
                description:
                  "Protect your account with TOTP-based two-factor authentication on all plans.",
                icon: "DeviceMobileIcon",
              },
            ],
          },
        },
      ],
    },

    // ─── TEMPLATES SHOWCASE ─────────────────────────────────────
    {
      name: "Templates",
      slug: "/templates",
      blocks: [
        {
          type: "hero",
          content: {
            badgeText: "Templates",
            heading: "Start with",
            headingHighlight: "templates",
            subheading:
              "Pre-built multi-page templates that compose blocks into complete websites. Clone, customize, and deploy.",
            primaryButtonText: "Browse Templates",
            primaryButtonUrl: "#templates",
            secondaryButtonText: "Create Your Own",
            secondaryButtonUrl: "/docs/templates",
          },
        },
        {
          type: "features",
          content: {
            heading: "Why use",
            headingHighlight: "templates",
            description:
              "Templates are the fastest way to go from zero to a production-ready site.",
            features: [
              {
                title: "Multi-Page Ready",
                description:
                  "Each template includes 20+ pages with header, footer, docs, legal, auth, and more.",
                icon: "LayersIcon",
              },
              {
                title: "Fully Customizable",
                description:
                  "Every template is defined in pages.json. Change content, swap blocks, or add pages freely.",
                icon: "SparklesIcon",
              },
              {
                title: "Mobile Responsive",
                description:
                  "All templates use responsive Tailwind CSS layouts that work on every device.",
                icon: "DeviceMobileIcon",
              },
              {
                title: "Real Content",
                description:
                  "Templates come with realistic placeholder content — not lorem ipsum.",
                icon: "PaintBrushIcon",
              },
            ],
          },
        },
      ],
    },

    // ─── NEWSLETTER ─────────────────────────────────────────────
    {
      name: "Newsletter",
      slug: "/newsletter",
      blocks: [
        {
          type: "newsletter-form",
          content: {
            heading: "Stay in the loop",
            description:
              "Get the latest cmssy updates, new block releases, and tips delivered to your inbox. No spam, unsubscribe anytime.",
            showNameField: false,
            emailPlaceholder: "you@example.com",
            submitButtonText: "Subscribe",
            variant: "card",
            showPrivacyNote: true,
            privacyNote: "We respect your privacy. Unsubscribe at any time.",
            successMessage:
              "Thanks for subscribing! Check your inbox for a confirmation email.",
            errorMessage: "Something went wrong. Please try again.",
          },
        },
      ],
    },

    // ─── LOGIN ──────────────────────────────────────────────────
    {
      name: "Login",
      slug: "/login",
      blocks: [
        {
          type: "login-form",
          content: {
            heading: "Welcome back",
            description: "Sign in to your cmssy account to continue.",
            emailPlaceholder: "you@example.com",
            passwordPlaceholder: "Enter your password",
            submitButtonText: "Sign in",
            showRememberMe: true,
            rememberMeLabel: "Remember me",
            showForgotPassword: true,
            forgotPasswordText: "Forgot your password?",
            forgotPasswordUrl: "/forgot-password",
            showRegisterLink: true,
            registerLinkText: "Don't have an account? Sign up",
            registerUrl: "/signup",
            redirectAfterLogin: "/",
            variant: "default",
          },
        },
      ],
    },

    // ─── REGISTER ───────────────────────────────────────────────
    {
      name: "Register",
      slug: "/signup",
      blocks: [
        {
          type: "register-form",
          content: {
            heading: "Create your account",
            description:
              "Sign up to start building with cmssy. Free forever for personal projects.",
            showNameFields: true,
            firstNamePlaceholder: "First name",
            lastNamePlaceholder: "Last name",
            emailPlaceholder: "you@example.com",
            passwordPlaceholder: "Create a password",
            confirmPasswordPlaceholder: "Confirm your password",
            submitButtonText: "Create account",
            minPasswordLength: 8,
            showTerms: true,
            termsText: "I agree to the Terms of Service and Privacy Policy",
            termsUrl: "/terms",
            privacyUrl: "/privacy",
            showLoginLink: true,
            loginLinkText: "Already have an account? Sign in",
            loginUrl: "/login",
            redirectAfterRegister: "/verify-email-pending",
            variant: "default",
          },
        },
      ],
    },

    // ─── FORGOT PASSWORD ────────────────────────────────────────
    {
      name: "Forgot Password",
      slug: "/forgot-password",
      blocks: [
        {
          type: "forgot-password-form",
          content: {
            heading: "Forgot your password?",
            description:
              "Enter your email address and we'll send you a link to reset your password.",
            emailPlaceholder: "you@example.com",
            submitButtonText: "Send reset link",
            showLoginLink: true,
            loginLinkText: "Back to login",
            loginUrl: "/login",
            successMessage:
              "If an account exists with this email, you will receive a password reset link shortly.",
            variant: "default",
          },
        },
      ],
    },

    // ─── CUSTOMER PROFILE ───────────────────────────────────────
    {
      name: "Profile",
      slug: "/profile",
      blocks: [
        {
          type: "customer-profile",
          content: {
            heading: "Your Profile",
            description: "Manage your account information and preferences.",
            showAvatarUpload: true,
            showPhoneField: true,
            firstNamePlaceholder: "First name",
            lastNamePlaceholder: "Last name",
            displayNamePlaceholder: "Display name (public)",
            phonePlaceholder: "+1 (555) 123-4567",
            saveButtonText: "Save changes",
            showLogoutButton: true,
            logoutButtonText: "Sign out",
            logoutRedirectUrl: "/",
            variant: "default",
          },
        },
      ],
    },

    // ═══════════════════════════════════════════════════════════════
    // DOCUMENTATION PAGES — filled with real cmssy documentation
    // ═══════════════════════════════════════════════════════════════

    // ─── DOCS HUB ───────────────────────────────────────────────
    {
      name: "Documentation",
      slug: "/docs",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            searchPlaceholder: "Search docs...",
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
            discordUrl: "https://discord.gg/cmssy",
          },
        },
        {
          type: "docs-card-grid",
          content: {
            heading: "Documentation",
            description:
              "Everything you need to build, customize, and deploy your cmssy site.",
            columns: "3",
            cards: [
              {
                icon: "Rocket",
                title: "Getting Started",
                description:
                  "Install the CLI, scaffold your first project, and see it live in under 5 minutes.",
                url: "/docs/installation",
              },
              {
                icon: "Puzzle",
                title: "Blocks",
                description:
                  "Self-contained React components with typed schemas, styles, and live preview data.",
                url: "/docs/blocks",
              },
              {
                icon: "Layout",
                title: "Templates",
                description:
                  "Compose blocks into multi-page websites with pages.json. No component code — pure config.",
                url: "/docs/templates",
              },
              {
                icon: "Palette",
                title: "Theming",
                description:
                  "Customize colors, typography, and spacing with Tailwind CSS v4 and OKLCH variables.",
                url: "/docs/theming",
              },
              {
                icon: "Globe",
                title: "Deployment",
                description:
                  "Deploy to Vercel, Netlify, or any static host with a single cmssy build command.",
                url: "/docs/deployment",
              },
              {
                icon: "Code",
                title: "API Reference",
                description:
                  "REST API for programmatic access to blocks, pages, content, and media.",
                url: "/docs/api-overview",
              },
            ],
          },
        },
      ],
    },

    // ─── DOCS: INSTALLATION ─────────────────────────────────────
    {
      name: "Installation",
      slug: "/docs/installation",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Installation",
            description: "Get up and running with cmssy in under 5 minutes.",
            lastUpdated: "2026-01-15",
            content:
              '<h2 id="prerequisites">Prerequisites</h2><p>Before you begin, make sure you have the following installed:</p><ul><li><strong>Node.js 18+</strong> — we recommend using <a href="https://github.com/nvm-sh/nvm">nvm</a> to manage versions</li><li><strong>pnpm</strong> — our recommended package manager (npm and yarn also work)</li><li><strong>Git</strong> — for version control and publishing</li></ul><h2 id="install-the-cli">Install the CLI</h2><p>Install the cmssy CLI globally to access all commands from your terminal:</p><h2 id="create-a-project">Create a Project</h2><p>Scaffold a new project with the <code>init</code> command. This creates the directory structure, installs dependencies, and sets up Tailwind CSS v4 with OKLCH color tokens:</p><h2 id="project-structure">Project Structure</h2><p>After initialization, your project looks like this:</p><pre><code>my-site/\n├── blocks/           # Your custom blocks\n├── templates/        # Page templates (pages.json)\n├── components/ui/    # Shared UI primitives (shadcn)\n├── styles/main.css   # Global styles + @theme inline\n├── postcss.config.js # PostCSS with @tailwindcss/postcss\n├── tsconfig.json     # TypeScript configuration\n└── package.json      # Dependencies (cmssy-cli, react, tailwindcss)\n</code></pre><h2 id="start-development">Start Development</h2><p>Launch the development server with hot-reload and live preview:</p><p>Open <a href="http://localhost:3000">http://localhost:3000</a> to see the dev UI. You\'ll see a list of all blocks and templates with a live preview and content editor sidebar.</p><h2 id="next-steps">Next Steps</h2><p>Now that you\'re set up, explore the following guides:</p><ul><li><a href="/docs/quickstart">Quickstart</a> — build and publish your first block</li><li><a href="/docs/blocks">Blocks</a> — understand block anatomy and schemas</li><li><a href="/docs/templates">Templates</a> — compose blocks into full-page templates</li></ul>',
            showToc: true,
            tocTitle: "On this page",
            showPrevNext: true,
            prevPage: [{ label: "Documentation", url: "/docs" }],
            nextPage: [{ label: "Quickstart", url: "/docs/quickstart" }],
            showEditLink: true,
            editUrl:
              "https://github.com/cmssy/docs/edit/main/docs/installation.md",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: "npm install -g cmssy-cli\n\n# or with pnpm\npnpm add -g cmssy-cli\n\n# Verify installation\ncmssy --version",
            language: "bash",
            filename: "Terminal",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: "cmssy init my-site\ncd my-site\npnpm install",
            language: "bash",
            filename: "Terminal",
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "tip",
            title: "Using npx",
            content:
              "<p>You can also use <code>npx cmssy-cli</code> without installing globally. This is useful for CI/CD pipelines or one-off commands.</p>",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: "cmssy dev\n\n# With a specific port\ncmssy dev --port 4000",
            language: "bash",
            filename: "Terminal",
          },
        },
      ],
    },

    // ─── DOCS: QUICKSTART ───────────────────────────────────────
    {
      name: "Quickstart",
      slug: "/docs/quickstart",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Quickstart",
            description: "Build and publish your first block in 5 minutes.",
            lastUpdated: "2026-01-20",
            content:
              '<h2 id="create-a-block">Create a Block</h2><p>Use the <code>create</code> command to scaffold a new block. This generates the component, styles, schema, and preview data:</p><p>This creates the following structure:</p><pre><code>blocks/my-block/\n├── block.config.ts    # Schema + metadata\n├── package.json       # Dependencies\n├── preview.json       # Sample content for dev preview\n└── src/\n    ├── index.tsx       # Entry point (re-export)\n    ├── index.css       # Component styles\n    ├── MyBlock.tsx     # React component\n    └── block.d.ts      # TypeScript types\n</code></pre><h2 id="define-the-schema">Define the Schema</h2><p>Open <code>block.config.ts</code> to define the content schema. The schema determines what fields appear in the CMS editor. Each field has a type, label, and optional validation:</p><h2 id="build-the-component">Build the Component</h2><p>Edit <code>src/MyBlock.tsx</code> to build your UI. The component receives a <code>content</code> prop with all schema fields typed. Use Tailwind CSS v4 classes for styling:</p><h2 id="preview-locally">Preview Locally</h2><p>Run <code>cmssy dev</code> and select your block from the sidebar. The preview updates in real-time as you edit code. Use the editor panel on the right to modify content fields and see changes instantly.</p><h2 id="publish">Publish</h2><p>When you\'re happy with your block, publish it to the platform:</p><pre><code>cmssy publish blocks/my-block</code></pre><p>Your block is now available in the CMS for any page in your workspace.</p>',
            showToc: true,
            showPrevNext: true,
            prevPage: [{ label: "Installation", url: "/docs/installation" }],
            nextPage: [
              {
                label: "Project Structure",
                url: "/docs/project-structure",
              },
            ],
            showEditLink: true,
            editUrl:
              "https://github.com/cmssy/docs/edit/main/docs/quickstart.md",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: "cmssy create my-block\n\n# With options\ncmssy create hero-banner --category marketing",
            language: "bash",
            filename: "Terminal",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: `import { defineBlock } from "@cmssy/cli/config";\n\nexport default defineBlock({\n  name: "My Block",\n  description: "A custom content block",\n  category: "marketing",\n  tags: ["marketing", "custom"],\n\n  schema: {\n    heading: {\n      type: "singleLine",\n      label: "Heading",\n      required: true,\n      placeholder: "Enter heading text",\n    },\n    description: {\n      type: "multiLine",\n      label: "Description",\n      defaultValue: "Default description text",\n    },\n    showButton: {\n      type: "boolean",\n      label: "Show CTA Button",\n      defaultValue: true,\n    },\n    buttonText: {\n      type: "singleLine",\n      label: "Button Text",\n      defaultValue: "Get Started",\n      showWhen: { field: "showButton", equals: true },\n    },\n  },\n});`,
            language: "typescript",
            filename: "block.config.ts",
            showLineNumbers: true,
            highlightLines: "9-31",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: 'export default function MyBlock({ content }) {\n  const { heading, description, showButton = true, buttonText = "Get Started" } = content;\n\n  return (\n    <section className="py-24">\n      <div className="max-w-4xl mx-auto px-4 text-center">\n        <h2 className="text-4xl font-bold tracking-tight mb-4">\n          {heading}\n        </h2>\n        {description && (\n          <p className="text-lg text-muted-foreground mb-8">\n            {description}\n          </p>\n        )}\n        {showButton && (\n          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-xs hover:bg-primary/90 transition-colors">\n            {buttonText}\n          </button>\n        )}\n      </div>\n    </section>\n  );\n}',
            language: "tsx",
            filename: "src/MyBlock.tsx",
            showLineNumbers: true,
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "info",
            title: "Hot Reload",
            content:
              "<p>The dev server watches for file changes and updates the preview instantly. CSS changes via Tailwind are also picked up automatically — no restart needed.</p>",
          },
        },
      ],
    },

    // ─── DOCS: BLOCKS ───────────────────────────────────────────
    {
      name: "Blocks",
      slug: "/docs/blocks",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Blocks",
            description:
              "Blocks are the fundamental building units of your cmssy site. Each block is a self-contained React component with a typed content schema.",
            lastUpdated: "2026-02-01",
            content:
              '<h2 id="what-is-a-block">What is a Block?</h2><p>A block is a reusable UI component that can be placed on any page. Each block consists of:</p><ul><li><strong>Component</strong> (<code>src/index.tsx</code>) — the React component that renders the UI</li><li><strong>Schema</strong> (<code>block.config.ts</code>) — defines the content fields, metadata, and pricing</li><li><strong>Styles</strong> (<code>src/index.css</code>) — component-specific CSS (Tailwind classes work out of the box)</li><li><strong>Preview data</strong> (<code>preview.json</code>) — sample content for the dev preview</li></ul><h2 id="block-anatomy">Block Anatomy</h2><p>Every block follows the same directory structure inside <code>blocks/</code>:</p><pre><code>blocks/my-block/\n├── block.config.ts    # Schema + metadata\n├── package.json       # Dependencies\n├── preview.json       # Sample content\n└── src/\n    ├── index.tsx       # Entry point (re-export)\n    ├── index.css       # Styles\n    ├── MyBlock.tsx     # Component\n    └── block.d.ts      # TypeScript types\n</code></pre><h2 id="schema-field-types">Schema Field Types</h2><p>The schema defines what content editors can configure. Available field types:</p><table><thead><tr><th>Type</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td><code>singleLine</code></td><td>Short text input</td><td>Headings, labels, button text</td></tr><tr><td><code>multiLine</code></td><td>Textarea for longer content</td><td>Descriptions, paragraphs</td></tr><tr><td><code>richText</code></td><td>HTML content with formatting</td><td>Article body, legal sections</td></tr><tr><td><code>boolean</code></td><td>Toggle switch</td><td>Show/hide elements</td></tr><tr><td><code>select</code></td><td>Dropdown with predefined options</td><td>Icon picker, variant selector</td></tr><tr><td><code>media</code></td><td>Image/file upload</td><td>Hero images, logos</td></tr><tr><td><code>link</code></td><td>URL input</td><td>Button URLs, navigation links</td></tr><tr><td><code>repeater</code></td><td>List of nested fields (arrays)</td><td>Features list, FAQ items</td></tr><tr><td><code>numeric</code></td><td>Number input with min/max</td><td>Password length, column count</td></tr><tr><td><code>date</code></td><td>Date picker</td><td>Last updated, publish date</td></tr><tr><td><code>color</code></td><td>Color picker</td><td>Custom accent colors</td></tr><tr><td><code>emailConfiguration</code></td><td>Email config selector</td><td>Contact form notifications</td></tr><tr><td><code>pageSelector</code></td><td>Page reference picker</td><td>Doc sidebar navigation</td></tr></tbody></table><h2 id="field-options">Field Options</h2><p>Every field supports these common options:</p><ul><li><code>label</code> — display label in the editor</li><li><code>required</code> — validation (default: false)</li><li><code>defaultValue</code> — initial value</li><li><code>placeholder</code> — input placeholder text</li><li><code>helpText</code> — helper text below the field</li><li><code>group</code> — group related fields in the editor sidebar</li><li><code>showWhen</code> — conditionally show based on another field</li></ul><h2 id="conditional-fields">Conditional Fields</h2><p>Use <code>showWhen</code> to conditionally show fields based on other field values. This keeps the editor clean by hiding irrelevant options:</p><h2 id="groups">Groups</h2><p>Use the <code>group</code> property to organize fields into collapsible sections in the editor. You can also define group metadata with icons:</p><pre><code>groups: {\n  logo: { label: "Logo", icon: "Image" },\n  navigation: { label: "Navigation", icon: "Menu" },\n  behavior: { label: "Behavior", icon: "Settings", collapsed: true },\n}</code></pre><h2 id="layout-positions">Layout Positions</h2><p>Blocks can declare a <code>layoutPosition</code> to indicate they belong in a specific area of the page layout:</p><ul><li><code>header</code> — rendered at the top of every page</li><li><code>footer</code> — rendered at the bottom of every page</li><li><code>sidebar_left</code> — rendered as a left sidebar (used by docs-sidebar)</li></ul><p>Layout blocks are shared across all pages in a template and configured once in <code>pages.json</code> under <code>layoutPositions</code>.</p>',
            showToc: true,
            showPrevNext: true,
            prevPage: [
              {
                label: "Project Structure",
                url: "/docs/project-structure",
              },
            ],
            nextPage: [{ label: "Templates", url: "/docs/templates" }],
            showEditLink: true,
            editUrl: "https://github.com/cmssy/docs/edit/main/docs/blocks.md",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: 'showButton: {\n  type: "boolean",\n  label: "Show CTA Button",\n  defaultValue: true,\n},\nbuttonText: {\n  type: "singleLine",\n  label: "Button Text",\n  defaultValue: "Get Started",\n  showWhen: { field: "showButton", equals: true },\n},',
            language: "typescript",
            filename: "block.config.ts — Conditional Fields",
            showLineNumbers: true,
            highlightLines: "10",
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "warning",
            title: "Block Type Names",
            content:
              "<p>Block types use the format <code>@scope/blocks.block-name</code>. The scope comes from your <code>package.json</code> name field. When referencing blocks in <code>pages.json</code>, always use the full qualified name, e.g. <code>@cmssy-marketing/blocks.hero</code>.</p>",
          },
        },
      ],
    },

    // ─── DOCS: TEMPLATES ────────────────────────────────────────
    {
      name: "Templates Guide",
      slug: "/docs/templates",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Templates",
            description:
              "Templates are collections of pages that compose blocks into complete websites. They're pure manifests — no component code, just configuration.",
            lastUpdated: "2026-02-01",
            content:
              '<h2 id="what-is-a-template">What is a Template?</h2><p>A template defines a multi-page site by combining blocks with content. Unlike blocks, templates have no React component. They consist of:</p><ul><li><strong>block.config.ts</strong> — template metadata, tags, and page definitions using <code>defineTemplate</code></li><li><strong>pages.json</strong> — the full content payload with layout positions and all pages</li><li><strong>package.json</strong> — dependencies and template info</li></ul><h2 id="define-template">defineTemplate API</h2><p>The <code>defineTemplate</code> function accepts the template name, description, category, tags, page structure, layout positions, and an optional global schema:</p><h2 id="pages-json">pages.json Structure</h2><p>The <code>pages.json</code> file is the heart of a template. It defines layout positions (header, footer) and individual pages with their blocks and full content:</p><h2 id="layout-positions">Layout Positions</h2><p>Layout positions are blocks that appear on every page. The most common are:</p><ul><li><strong>header</strong> — site navigation, rendered at the top</li><li><strong>footer</strong> — site footer, rendered at the bottom</li><li><strong>sidebar_left</strong> — documentation sidebar</li></ul><p>Each layout position specifies a block type and its content. This content is shared across all pages.</p><h2 id="page-metadata">Page Metadata</h2><p>Each page in pages.json can include a <code>metadata</code> object for SEO:</p><pre><code>"metadata": {\n  "title": "About Us — cmssy",\n  "description": "Learn about our mission and team."\n}</code></pre><h2 id="publishing">Publishing Templates</h2><p>When you publish a template, the CLI:</p><ol><li>Validates all referenced blocks exist and their schemas match the content</li><li>Publishes any blocks that have changed since last publish</li><li>Creates or updates all pages defined in <code>pages.json</code></li><li>Sets up layout positions (header, footer, sidebars)</li></ol><pre><code>cmssy publish templates/marketing-site</code></pre><p>Templates don\'t have source code to compile — they\'re pure configuration. This makes publishing fast and reliable.</p><h2 id="dev-preview">Dev Preview</h2><p>Run <code>cmssy dev</code> and click on a template to see a full composed preview. The dev server renders all blocks on each page with a navigation bar to switch between pages. Use <code>Ctrl+K</code> to quickly jump to any page.</p>',
            showToc: true,
            showPrevNext: true,
            prevPage: [{ label: "Blocks", url: "/docs/blocks" }],
            nextPage: [{ label: "Theming", url: "/docs/theming" }],
            showEditLink: true,
            editUrl:
              "https://github.com/cmssy/docs/edit/main/docs/templates.md",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: `import { defineTemplate } from "@cmssy/cli/config";\n\nexport default defineTemplate({\n  name: "Marketing Site",\n  description: "Complete marketing website with 25+ pages",\n  category: "website",\n  tags: ["marketing", "saas", "startup"],\n\n  pages: [\n    {\n      name: "Home",\n      slug: "/",\n      blocks: [\n        { type: "hero", content: { heading: "Welcome" } },\n        { type: "features", content: {} },\n        { type: "cta", content: {} },\n      ],\n    },\n  ],\n\n  layoutPositions: [\n    { position: "header", type: "header", content: {} },\n    { position: "footer", type: "footer", content: {} },\n  ],\n\n  schema: {\n    siteName: {\n      type: "singleLine",\n      label: "Site Name",\n      defaultValue: "My Company",\n    },\n  },\n});`,
            language: "typescript",
            filename: "block.config.ts",
            showLineNumbers: true,
            highlightLines: "9-20,22-25",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: '{\n  "layoutPositions": {\n    "header": {\n      "type": "@cmssy-marketing/blocks.header",\n      "content": {\n        "logoText": "cmssy",\n        "navigation": [\n          { "label": "Features", "url": "/features" },\n          { "label": "Pricing", "url": "/pricing" }\n        ]\n      }\n    },\n    "footer": {\n      "type": "@cmssy-marketing/blocks.footer",\n      "content": { "copyrightText": "cmssy. All rights reserved." }\n    }\n  },\n  "pages": [\n    {\n      "name": "Homepage",\n      "slug": "/",\n      "blocks": [\n        {\n          "type": "@cmssy-marketing/blocks.hero",\n          "content": { "heading": "Build reusable UI blocks" }\n        }\n      ],\n      "metadata": {\n        "title": "Home — cmssy",\n        "description": "The modern CMS for developers."\n      }\n    }\n  ]\n}',
            language: "json",
            filename: "pages.json",
            showLineNumbers: true,
            highlightLines: "2-17,19-33",
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "tip",
            title: "Template vs Block",
            content:
              "<p>Think of blocks as <strong>components</strong> and templates as <strong>compositions</strong>. Blocks are the bricks, templates are the blueprints. You develop blocks individually, then assemble them into templates with <code>pages.json</code>.</p>",
          },
        },
      ],
    },

    // ─── DOCS: THEMING ──────────────────────────────────────────
    {
      name: "Theming",
      slug: "/docs/theming",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Theming",
            description:
              "Customize the look and feel of your cmssy site using CSS variables and Tailwind CSS v4.",
            lastUpdated: "2026-02-01",
            content:
              '<h2 id="color-system">Color System</h2><p>Cmssy uses OKLCH color values defined as CSS custom properties. The theme is split into semantic tokens that adapt to light and dark modes automatically:</p><table><thead><tr><th>Token</th><th>Tailwind Class</th><th>Usage</th></tr></thead><tbody><tr><td><code>--background</code> / <code>--foreground</code></td><td><code>bg-background</code>, <code>text-foreground</code></td><td>Page background and text</td></tr><tr><td><code>--primary</code> / <code>--primary-foreground</code></td><td><code>bg-primary</code>, <code>text-primary-foreground</code></td><td>Primary action buttons</td></tr><tr><td><code>--muted</code> / <code>--muted-foreground</code></td><td><code>bg-muted</code>, <code>text-muted-foreground</code></td><td>Subtle backgrounds, helper text</td></tr><tr><td><code>--card</code> / <code>--card-foreground</code></td><td><code>bg-card</code>, <code>text-card-foreground</code></td><td>Card surfaces</td></tr><tr><td><code>--border</code></td><td><code>border-border</code></td><td>Default border color</td></tr><tr><td><code>--destructive</code></td><td><code>bg-destructive</code>, <code>text-destructive</code></td><td>Error and danger states</td></tr><tr><td><code>--ring</code></td><td><code>ring-ring</code></td><td>Focus ring color</td></tr></tbody></table><h2 id="customizing-colors">Customizing Colors</h2><p>Edit the <code>:root</code> block in <code>styles/main.css</code> to change your color palette. Use OKLCH values for perceptual uniformity:</p><h2 id="dark-mode">Dark Mode</h2><p>Dark mode is controlled by the <code>.dark</code> class on the root element. Override the same variables in a <code>.dark</code> selector. All semantic tokens adapt automatically — use <code>bg-background</code> and <code>text-foreground</code> instead of hardcoded colors.</p><h2 id="tailwind-v4">Tailwind CSS v4</h2><p>Cmssy uses Tailwind CSS v4 with CSS-first configuration. Key differences from v3 to remember:</p><ul><li>No <code>tailwind.config.js</code> — everything lives in CSS with <code>@theme inline</code></li><li><code>@source</code> directives tell Tailwind which files to scan</li><li>Gradient classes use <code>bg-linear-to-r</code> instead of <code>bg-gradient-to-r</code></li><li>Shadow scale shifted: <code>shadow-xs</code> = old <code>shadow-sm</code>, <code>shadow-sm</code> = old bare <code>shadow</code></li><li>Border/ring colors default to <code>currentColor</code> — always specify <code>border-border</code></li><li><code>outline-hidden</code> replaces <code>outline-none</code></li><li>Use <code>size-4</code> instead of <code>w-4 h-4</code></li><li>Important modifier is suffix: <code>flex!</code> not <code>!flex</code></li></ul><h2 id="border-radius">Border Radius</h2><p>Border radius uses a base <code>--radius</code> variable (default 10px). All radius tokens derive from it:</p><ul><li><code>rounded-xs</code> = <code>calc(var(--radius) - 6px)</code></li><li><code>rounded-sm</code> = <code>calc(var(--radius) - 4px)</code></li><li><code>rounded-md</code> = <code>calc(var(--radius) - 2px)</code></li><li><code>rounded-lg</code> = <code>var(--radius)</code> (10px default) — used for cards</li><li><code>rounded-xl</code> = <code>calc(var(--radius) + 4px)</code></li></ul>',
            showToc: true,
            showPrevNext: true,
            prevPage: [{ label: "Templates", url: "/docs/templates" }],
            nextPage: [
              { label: "Content Schema", url: "/docs/content-schema" },
            ],
            showEditLink: true,
            editUrl: "https://github.com/cmssy/docs/edit/main/docs/theming.md",
          },
        },
        {
          type: "docs-code-block",
          content: {
            code: ":root {\n  --radius: 0.625rem;\n  --background: oklch(1 0 0);\n  --foreground: oklch(0.145 0 0);\n  --primary: oklch(0.6 0.25 292);\n  --primary-foreground: oklch(0.985 0 0);\n  --muted: oklch(0.97 0 0);\n  --muted-foreground: oklch(0.556 0 0);\n  --card: oklch(1 0 0);\n  --card-foreground: oklch(0.145 0 0);\n  --border: oklch(0.922 0 0);\n  --ring: oklch(0.6 0.25 292);\n  --destructive: oklch(0.577 0.245 27.325);\n}",
            language: "css",
            filename: "styles/main.css",
            showLineNumbers: true,
            highlightLines: "3-13",
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "info",
            title: "OKLCH Colors",
            content:
              '<p>OKLCH provides perceptually uniform colors — two colors with the same lightness value actually <em>look</em> equally bright. Use the <a href="https://oklch.com">OKLCH color picker</a> to find values. Format: <code>oklch(lightness chroma hue)</code>.</p>',
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "warning",
            title: "Tailwind v4 Class Changes",
            content:
              "<p>If you're coming from Tailwind v3, watch out for renamed utilities: <code>shadow-sm</code> is now <code>shadow-xs</code>, <code>rounded-sm</code> is now <code>rounded-xs</code>, <code>outline-none</code> is now <code>outline-hidden</code>, and <code>bg-gradient-*</code> is now <code>bg-linear-*</code>. The entire scale shifted down by one step.</p>",
          },
        },
      ],
    },

    // ─── DOCS: CONTENT SCHEMA ───────────────────────────────────
    {
      name: "Content Schema",
      slug: "/docs/content-schema",
      blocks: [
        {
          type: "docs-sidebar",
          content: {
            logoText: "cmssy docs",
            logoUrl: "/docs",
            showSearch: true,
            showVersionSelector: true,
            currentVersion: "v2.0",
            sections: [
              {
                title: "Getting Started",
                pages: [
                  "/docs",
                  "/docs/installation",
                  "/docs/quickstart",
                  "/docs/project-structure",
                ],
              },
              {
                title: "Core Concepts",
                pages: [
                  "/docs/blocks",
                  "/docs/templates",
                  "/docs/theming",
                  "/docs/content-schema",
                ],
              },
              {
                title: "Guides",
                pages: [
                  "/docs/deployment",
                  "/docs/custom-domains",
                  "/docs/analytics",
                ],
              },
              {
                title: "API Reference",
                pages: [
                  "/docs/api-overview",
                  "/docs/api-authentication",
                  "/docs/api-blocks",
                  "/docs/api-pages",
                ],
              },
            ],
            githubUrl: "https://github.com/cmssy/docs",
          },
        },
        {
          type: "docs-article",
          content: {
            title: "Content Schema",
            description:
              "Deep dive into the schema system — field types, validation, repeaters, conditional fields, and groups.",
            lastUpdated: "2026-02-01",
            content:
              '<h2 id="overview">Overview</h2><p>Every cmssy block defines a <code>schema</code> object in <code>block.config.ts</code>. The schema serves three purposes:</p><ol><li><strong>Editor UI</strong> — automatically generates form fields in the visual editor</li><li><strong>Validation</strong> — ensures content meets requirements before publishing</li><li><strong>TypeScript types</strong> — generates type definitions for the <code>content</code> prop</li></ol><h2 id="field-anatomy">Field Anatomy</h2><p>Every field in a schema is an object with at minimum a <code>type</code> and <code>label</code>:</p><pre><code>fieldName: {\n  type: "singleLine",        // Required: field type\n  label: "Field Label",      // Required: editor display name\n  required: true,            // Optional: validation\n  defaultValue: "Hello",     // Optional: initial value\n  placeholder: "Enter...",   // Optional: input placeholder\n  helpText: "Shown below",   // Optional: helper text\n  group: "Section Name",     // Optional: group in editor\n  showWhen: { ... },         // Optional: conditional display\n}</code></pre><h2 id="repeater-fields">Repeater Fields</h2><p>Repeaters allow editors to add multiple items with a nested schema. They are the most powerful field type:</p><pre><code>features: {\n  type: "repeater",\n  label: "Features",\n  maxItems: 6,              // Optional: limit items\n  schema: {\n    title: { type: "singleLine", label: "Title", required: true },\n    description: { type: "multiLine", label: "Description" },\n    icon: { type: "select", label: "Icon", options: [...] },\n  }\n}</code></pre><p>Repeaters can be nested — a repeater can contain another repeater (e.g., footer columns with nested links).</p><h2 id="select-fields">Select Fields</h2><p>Select fields present a dropdown with predefined options:</p><pre><code>variant: {\n  type: "select",\n  label: "Style Variant",\n  options: [\n    { value: "default", label: "Default" },\n    { value: "card", label: "Card with background" },\n    { value: "minimal", label: "Minimal" },\n  ],\n  defaultValue: "default",\n}</code></pre><h2 id="show-when">Conditional Fields (showWhen)</h2><p>The <code>showWhen</code> property hides or shows a field based on another field\'s value. This keeps the editor uncluttered:</p><pre><code>showCta: {\n  type: "boolean",\n  label: "Show CTA Button",\n  defaultValue: true,\n},\nctaText: {\n  type: "singleLine",\n  label: "CTA Text",\n  showWhen: { field: "showCta", equals: true },\n},</code></pre><p>When <code>showCta</code> is false, the <code>ctaText</code> field is hidden from the editor. The value is preserved in content but not displayed.</p><h2 id="groups-advanced">Groups</h2><p>Groups organize fields into collapsible sections. Define group metadata at the block level:</p><pre><code>groups: {\n  logo: { label: "Logo", icon: "Image" },\n  behavior: { label: "Behavior", icon: "Settings", collapsed: true },\n}</code></pre><p>Then reference the group name in each field\'s <code>group</code> property. Fields without a group appear at the top of the editor.</p><h2 id="special-types">Special Field Types</h2><p>Two field types are unique to cmssy:</p><ul><li><code>emailConfiguration</code> — references a configured email provider (SMTP, SendGrid, etc.). Used in contact and newsletter forms to send notifications.</li><li><code>pageSelector</code> — references pages within the same template. Used by the docs-sidebar block to build navigation from actual page slugs.</li></ul>',
            showToc: true,
            showPrevNext: true,
            prevPage: [{ label: "Theming", url: "/docs/theming" }],
            nextPage: [{ label: "Deployment", url: "/docs/deployment" }],
            showEditLink: true,
            editUrl:
              "https://github.com/cmssy/docs/edit/main/docs/content-schema.md",
          },
        },
        {
          type: "docs-callout",
          content: {
            type: "tip",
            title: "Repeater Default Values",
            content:
              "<p>You can set <code>defaultValue</code> on a repeater field to pre-populate it with items. This is useful for blocks like contact info cards where you want 3 cards by default.</p>",
          },
        },
      ],
    },
  ],

  layoutPositions: [
    { position: "header", type: "header", content: {} },
    { position: "footer", type: "footer", content: {} },
  ],

  schema: {
    siteName: {
      type: "singleLine",
      label: "Site Name",
      placeholder: "Your Company Name",
      defaultValue: "cmssy",
    },
    siteDescription: {
      type: "multiLine",
      label: "Site Description",
      placeholder: "A brief description of your site",
      defaultValue:
        "The modern CMS that makes website creation effortless. Build beautiful websites with block-based architecture.",
    },
  },
});
