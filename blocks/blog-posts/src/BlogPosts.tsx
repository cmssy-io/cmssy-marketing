"use client";

import type { PageItem, PlatformContext } from "@cmssy/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "../../../components/container";
import { BlockContent } from "./block";

interface Props {
  content: BlockContent;
  context?: PlatformContext;
}

function getLocalizedField(
  field: Record<string, string> | null | undefined,
  language: string,
): string {
  if (!field) return "";
  return field[language] ?? field.en ?? Object.values(field)[0] ?? "";
}

function getCustomField(item: PageItem, key: string): unknown {
  const field = item.customFields?.find((f) => f.fieldKey === key);
  return field?.value ?? null;
}

function formatDate(dateStr: string | null, language: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString(language, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function PlaceholderCard() {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-background border animate-pulse">
      <div className="aspect-video bg-muted" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-5 w-4/5 bg-muted rounded" />
        <div className="h-10 w-full bg-muted/60 rounded" />
        <div className="h-3 w-2/5 bg-muted/40 rounded mt-auto" />
      </div>
    </div>
  );
}

function PostCard({
  item,
  language,
  layout,
  localizeHref,
}: {
  item: PageItem;
  language: string;
  layout: string;
  localizeHref?: (href: string) => string;
}) {
  const title = getLocalizedField(item.displayName, language);
  const excerpt = getLocalizedField(item.seoDescription, language);
  const coverImage = getCustomField(item, "cover_image") as string | null;
  const author = getCustomField(item, "author") as string | null;
  const category = getCustomField(item, "category") as string | null;
  const href = localizeHref ? localizeHref(item.fullSlug) : item.fullSlug;

  const isList = layout === "list";

  return (
    <a
      href={href}
      className={`group flex ${isList ? "flex-row" : "flex-col"} rounded-2xl overflow-hidden bg-background border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 no-underline text-inherit`}
    >
      {coverImage ? (
        <div
          className={`overflow-hidden ${isList ? "w-64 min-h-40 shrink-0" : "aspect-video"}`}
        >
          <img
            src={coverImage}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div
          className={`bg-muted ${isList ? "w-64 min-h-40 shrink-0" : "aspect-video"}`}
        />
      )}
      <div className="p-5 flex flex-col gap-2 flex-1">
        {category && (
          <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
            {category}
          </span>
        )}
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        {excerpt && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {excerpt}
          </p>
        )}
        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto pt-2">
          {item.publishedAt && (
            <time dateTime={item.publishedAt}>
              {formatDate(item.publishedAt, language)}
            </time>
          )}
          {author && <span className="font-medium">{author}</span>}
        </div>
      </div>
    </a>
  );
}

const gridColsMap: Record<string, string> = {
  "2": "md:grid-cols-2",
  "3": "md:grid-cols-2 lg:grid-cols-3",
};

export default function BlogPosts({ content, context }: Props) {
  const {
    badge,
    heading,
    description,
    layout = "grid",
    columns = "3",
    showSearch = true,
    parentPage,
    postsPerPage,
    searchPlaceholder = "Search posts...",
    loadingText = "Loading...",
    noResultsText = "No posts found",
  } = content;

  // pageSelector returns array of { slug, displayName } - extract first slug
  const parentSlug = Array.isArray(parentPage)
    ? parentPage[0]?.slug
    : typeof parentPage === "string"
      ? parentPage
      : undefined;

  const language = context?.language ?? "en";
  const pages = context?.pages;
  const isPreview = context?.isPreview ?? false;

  const [items, setItems] = useState<PageItem[]>(pages?.items ?? []);
  const [hasMore, setHasMore] = useState(pages?.hasMore ?? false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const limit = Number(postsPerPage) || 9;
  const PREVIEW_LIMIT = 6;
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Shared fetch helper
  const fetchPages = useCallback(
    async (opts: { offset?: number; search?: string; limit?: number }) => {
      if (!context?.workspace?.id || !parentSlug) return null;
      const apiUrl =
        typeof window !== "undefined" ? window.location.origin : "";
      const res = await fetch(`${apiUrl}/api/graphql`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query PublicPagesByType($workspaceId: String!, $parentSlug: String, $search: String, $limit: Int, $offset: Int) {
            publicPagesByType(workspaceId: $workspaceId, parentSlug: $parentSlug, search: $search, limit: $limit, offset: $offset) {
              items { id slug fullSlug publishedAt displayName seoTitle seoDescription customFields pageType }
              total hasMore
            }
          }`,
          variables: {
            workspaceId: context.workspace.id,
            parentSlug,
            search: opts.search || undefined,
            limit: opts.limit ?? limit,
            offset: opts.offset ?? 0,
          },
        }),
      });
      const json = await res.json();
      return json?.data?.publicPagesByType ?? null;
    },
    [context, parentSlug, limit],
  );

  // Debounce search input (300ms)
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Server-side search: fetch when debounced search changes
  useEffect(() => {
    if (isPreview || !debouncedSearch) {
      // Reset to SSR data when search is cleared
      if (!debouncedSearch && pages) {
        setItems(pages.items ?? []);
        setHasMore(pages.hasMore ?? false);
      }
      return;
    }

    setLoading(true);
    fetchPages({ search: debouncedSearch, limit: 50 })
      .then((result) => {
        if (result) {
          setItems(result.items);
          setHasMore(false); // no infinite scroll in search mode
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [debouncedSearch, isPreview, fetchPages, pages]);

  // Editor preview: fetch real posts client-side (limited to 6)
  useEffect(() => {
    if (!isPreview || previewLoaded || !context?.workspace?.id || !parentSlug)
      return;

    setPreviewLoaded(true);
    setLoading(true);

    fetchPages({ limit: PREVIEW_LIMIT })
      .then((result) => {
        if (result) {
          setItems(result.items);
          setHasMore(false);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isPreview, previewLoaded, context, parentSlug, fetchPages]);

  // Extract unique categories from loaded items (client-side filter only)
  const categories = useMemo(() => {
    const cats = new Set<string>();
    for (const item of items) {
      const cat = getCustomField(item, "category") as string | null;
      if (cat) cats.add(cat);
    }
    return Array.from(cats).sort();
  }, [items]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Client-side category filter (categories are few, no need for server-side)
  const filteredItems = useMemo(() => {
    if (!activeCategory) return items;
    return items.filter(
      (item) => getCustomField(item, "category") === activeCategory,
    );
  }, [items, activeCategory]);

  // Infinite scroll: load more pages
  const loadMore = useCallback(async () => {
    if (loading || !hasMore || debouncedSearch) return;
    setLoading(true);

    try {
      const result = await fetchPages({ offset: items.length });
      if (result) {
        setItems((prev) => [...prev, ...result.items]);
        setHasMore(result.hasMore);
      }
    } catch (err) {
      console.error("[BlogPosts] Load more failed:", err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, debouncedSearch, fetchPages, items.length]);

  // Infinite scroll observer
  useEffect(() => {
    if (isPreview || !hasMore) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadMore();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isPreview, hasMore, loadMore]);

  const gridCols =
    layout === "list" ? "" : (gridColsMap[columns] ?? gridColsMap["3"]);

  return (
    <section className="py-24">
      <Container>
        {(badge || heading || description) && (
          <div className="text-center max-w-2xl mx-auto mb-12">
            {badge && (
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400 px-3 py-1 rounded-full mb-4">
                {badge}
              </span>
            )}
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">{heading}</h2>
            )}
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        {/* Search + Category Filters (disabled in preview) */}
        {(showSearch || categories.length > 0) && (
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            {showSearch && (
              <div className="relative w-full sm:w-80">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => !isPreview && setSearch(e.target.value)}
                  placeholder={searchPlaceholder}
                  readOnly={isPreview}
                  className={`w-full pl-10 pr-4 py-2.5 border rounded-lg bg-background text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 ${isPreview ? "opacity-60 cursor-not-allowed" : ""}`}
                />
              </div>
            )}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    !activeCategory
                      ? "bg-violet-600 text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  All
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() =>
                      setActiveCategory(activeCategory === cat ? null : cat)
                    }
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-violet-600 text-white"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Posts Grid */}
        <div
          className={`grid grid-cols-1 gap-8 ${layout === "list" ? "" : gridCols}`}
        >
          {loading && items.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (
                <PlaceholderCard key={i} />
              ))
            : filteredItems.map((item) => (
                <PostCard
                  key={item.id}
                  item={item}
                  language={language}
                  layout={layout}
                  localizeHref={isPreview ? undefined : context?.localizeHref}
                />
              ))}
        </div>

        {/* No results */}
        {filteredItems.length === 0 && !loading && (
          <div className="flex flex-col items-center py-16 text-center">
            <svg
              className="h-12 w-12 text-muted-foreground/40 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            <p className="text-muted-foreground">{noResultsText}</p>
            {isPreview && parentSlug && (
              <p className="text-xs text-muted-foreground/60 mt-2">
                Add child pages to {parentSlug}
              </p>
            )}
          </div>
        )}

        {/* Infinite scroll sentinel + loading indicator (not in preview/search) */}
        {!isPreview && hasMore && !debouncedSearch && !activeCategory && (
          <div ref={sentinelRef} className="flex justify-center py-10">
            {loading && (
              <span className="text-sm text-muted-foreground animate-pulse">
                {loadingText}
              </span>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
