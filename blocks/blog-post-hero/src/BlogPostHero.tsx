import Image from "next/image";
import { Container } from "../../../components/container";
import { BlockContent } from "./block";

function formatDate(dateStr: string | undefined, lang = "en"): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogPostHero({ content }: { content: BlockContent }) {
  const {
    coverImage,
    title = "Untitled Post",
    excerpt,
    category,
    author,
    authorAvatar,
    date,
    readingTime = 5,
    breadcrumbLabel = "Blog",
    breadcrumbUrl = "/blog",
  } = content;

  return (
    <section className="relative">
      {/* Cover image */}
      {coverImage ? (
        <div className="relative w-full h-[28rem] sm:h-[32rem] lg:h-[36rem]">
          <Image
            src={coverImage}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10" />
        </div>
      ) : (
        <div className="relative w-full h-[28rem] sm:h-[32rem] lg:h-[36rem] bg-linear-to-br from-violet-600 via-purple-600 to-indigo-700">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        </div>
      )}

      {/* Content overlay */}
      <Container className="relative">
        <div className="-mt-48 sm:-mt-56 relative z-10 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
            <a
              href={breadcrumbUrl}
              className="hover:text-white transition-colors no-underline"
            >
              {breadcrumbLabel}
            </a>
            <svg
              width={14}
              height={14}
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white/50 truncate">{title}</span>
          </nav>

          {/* Category badge */}
          {category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-violet-300 bg-violet-500/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
              {category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {title}
          </h1>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-lg text-white/80 leading-relaxed mb-6 max-w-2xl">
              {excerpt}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            {/* Author */}
            {author && (
              <div className="flex items-center gap-2">
                {authorAvatar ? (
                  <Image
                    src={authorAvatar}
                    alt={author}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-violet-500/30 flex items-center justify-center text-white text-xs font-medium">
                    {author.charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="font-medium text-white">{author}</span>
              </div>
            )}

            {/* Separator */}
            {author && (date || readingTime) && (
              <span className="text-white/30">|</span>
            )}

            {/* Date */}
            {date && (
              <time dateTime={date} className="flex items-center gap-1.5">
                <svg
                  width={16}
                  height={16}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {formatDate(date)}
              </time>
            )}

            {/* Reading time */}
            {readingTime && (
              <span className="flex items-center gap-1.5">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {readingTime} min read
              </span>
            )}
          </div>
        </div>
      </Container>

      {/* Spacer for content below */}
      <div className="h-12 sm:h-16" />
    </section>
  );
}
