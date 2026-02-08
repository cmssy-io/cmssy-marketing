"use client";
import { Calendar, ChevronLeft, ChevronRight, Edit3 } from "lucide-react";
import { useEffect, useState } from "react";
import { BlockContent } from "./block";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function DocsArticle({ content }: { content: BlockContent }) {
  const {
    title,
    description,
    lastUpdated,
    content: articleContent = "",
    showToc = true,
    tocTitle = "On this page",
    showPrevNext = true,
    prevPage = [],
    nextPage = [],
    showEditLink = true,
    editUrl,
  } = content;

  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  // Extract headings from content for TOC
  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(articleContent, "text/html");
    const headings = doc.querySelectorAll("h2, h3");

    const items: TocItem[] = [];
    headings.forEach((heading) => {
      const id =
        heading.id ||
        heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
        "";
      items.push({
        id,
        text: heading.textContent || "",
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setTocItems(items);
  }, [articleContent]);

  // Track active heading on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" },
    );

    tocItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tocItems]);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const prev = prevPage[0];
  const next = nextPage[0];

  return (
    <div className="container flex gap-8 py-8 lg:py-12">
      {/* Main Content */}
      <article className="flex-1 min-w-0">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground mb-4">{description}</p>
          )}
          {lastUpdated && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last updated: {formatDate(lastUpdated)}</span>
            </div>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-violet dark:prose-invert max-w-none
            prose-headings:scroll-mt-20
            prose-h2:text-2xl prose-h2:font-semibold prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:font-medium prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-violet-600 prose-a:no-underline hover:prose-a:underline
            prose-ul:text-muted-foreground prose-li:marker:text-violet-500
          "
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />

        {/* Edit Link */}
        {showEditLink && editUrl && (
          <div className="mt-12 pt-6 border-t">
            <a
              href={editUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Edit3 className="h-4 w-4" />
              Edit this page on GitHub
            </a>
          </div>
        )}

        {/* Prev/Next Navigation */}
        {showPrevNext && (prev || next) && (
          <nav className="mt-8 pt-8 border-t grid grid-cols-2 gap-4">
            {prev ? (
              <a
                href={prev.url}
                className="group flex flex-col p-4 rounded-lg border hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-colors"
              >
                <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  <ChevronLeft className="h-3 w-3" />
                  Previous
                </span>
                <span className="font-medium group-hover:text-violet-600 transition-colors">
                  {prev.label}
                </span>
              </a>
            ) : (
              <div />
            )}
            {next && (
              <a
                href={next.url}
                className="group flex flex-col items-end p-4 rounded-lg border hover:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/20 transition-colors"
              >
                <span className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
                  Next
                  <ChevronRight className="h-3 w-3" />
                </span>
                <span className="font-medium group-hover:text-violet-600 transition-colors">
                  {next.label}
                </span>
              </a>
            )}
          </nav>
        )}
      </article>

      {/* Table of Contents */}
      {showToc && tocItems.length > 0 && (
        <aside className="hidden xl:block w-64 shrink-0">
          <div className="sticky top-20">
            <h4 className="text-sm font-semibold mb-4">{tocTitle}</h4>
            <nav className="space-y-1">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`
                    block text-sm py-1 transition-colors
                    ${item.level === 3 ? "pl-4" : ""}
                    ${
                      activeId === item.id
                        ? "text-violet-600 font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      )}
    </div>
  );
}
