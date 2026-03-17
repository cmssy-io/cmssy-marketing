interface ImageContent {
  src?: string;
  alt?: string;
  caption?: string;
  width?: "small" | "medium" | "large" | "full";
  rounded?: boolean;
}

const widthClasses: Record<string, string> = {
  small: "max-w-[480px]",
  medium: "max-w-[640px]",
  large: "max-w-[800px]",
  full: "max-w-none",
};

export default function Image({ content }: { content: ImageContent }) {
  const { src, alt = "", caption, width = "full", rounded = true } = content;

  if (!src) {
    return (
      <figure className="py-4 px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto ${widthClasses[width] || widthClasses.full}`}>
          <div className="flex flex-col items-center justify-center h-48 rounded-lg border-2 border-dashed border-neutral-200 bg-neutral-50 text-neutral-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-40"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className="py-4 px-4 sm:px-6 lg:px-8">
      <div className={`mx-auto ${widthClasses[width] || widthClasses.full}`}>
        <img
          src={src}
          alt={alt}
          className={`w-full h-auto ${rounded ? "rounded-lg" : ""}`}
        />
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-neutral-500">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
