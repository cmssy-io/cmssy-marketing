import { useState, useEffect } from "react";
import { ZoomIn, X } from "lucide-react";
import { Container } from "../../../components/container";
import { BlockContent } from "./block";

export default function DocsImage({ content }: { content: BlockContent }) {
  const {
    src,
    alt = "",
    caption,
    width = "large",
    border = true,
    rounded = true,
    shadow = true,
    zoomable = true,
  } = content;

  const [isZoomed, setIsZoomed] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isZoomed) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  if (!src) {
    return (
      <Container as="figure" className="py-6">
        <div className="mx-auto max-w-[800px]">
          <div className="flex flex-col items-center justify-center h-48 rounded-lg border-2 border-dashed border-border bg-muted/30 text-muted-foreground">
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
      </Container>
    );
  }

  const widthClasses = {
    small: "max-w-[480px]",
    medium: "max-w-[640px]",
    large: "max-w-[800px]",
    full: "max-w-none",
  };

  const imageClasses = [
    "w-full h-auto",
    border && "border border-border",
    rounded && "rounded-lg",
    shadow && "shadow-md",
    zoomable && "cursor-zoom-in",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Container as="figure" className="py-6">
      <div className={`mx-auto ${widthClasses[width]}`}>
        {/* Image with zoom hint */}
        <div className="relative group">
          <img
            src={src}
            alt={alt}
            className={imageClasses}
            onClick={() => zoomable && setIsZoomed(true)}
          />
          {zoomable && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="p-2 rounded-full bg-black/50 text-white backdrop-blur-sm">
                <ZoomIn className="h-5 w-5" />
              </div>
            </div>
          )}
        </div>

        {/* Caption */}
        {caption && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </div>

      {/* Lightbox overlay */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <button
            type="button"
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </Container>
  );
}
