import { useState } from "react";
import { Search, Menu, X, Github, MessageCircle, ChevronRight } from "lucide-react";
import { BlockContent } from "./block";

export default function DocsSidebar({ content }: { content: BlockContent }) {
  const {
    logo,
    logoText = "Docs",
    logoUrl = "/",
    sections = [],
    showSearch = true,
    searchPlaceholder = "Search docs...",
    showVersionSelector = false,
    currentVersion = "v1.0",
    githubUrl,
    discordUrl,
  } = content;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Get current path for active state
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="flex items-center justify-between px-4 h-14">
          <a href={logoUrl} className="flex items-center gap-2 font-semibold">
            {logo && <img src={logo} alt="" className="h-6 w-6" />}
            <span>{logoText}</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-72 bg-background border-r
          transform transition-transform duration-200 ease-in-out
          lg:translate-x-0 lg:sticky lg:top-0
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-14 flex items-center gap-2 px-4 border-b">
            <a href={logoUrl} className="flex items-center gap-2 font-semibold">
              {logo && <img src={logo} alt="" className="h-6 w-6" />}
              <span>{logoText}</span>
            </a>
            {showVersionSelector && (
              <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded">
                {currentVersion}
              </span>
            )}
          </div>

          {/* Search */}
          {showSearch && (
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm bg-muted rounded-lg border-0 focus:ring-2 focus:ring-violet-500 outline-none"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hidden sm:block">
                  ⌘K
                </kbd>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items?.map((item, itemIndex) => {
                    const isActive = currentPath === item.url;
                    return (
                      <li key={itemIndex}>
                        <a
                          href={item.url}
                          className={`
                            flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors
                            ${isActive
                              ? "bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                            }
                          `}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <ChevronRight className={`h-3 w-3 ${isActive ? "opacity-100" : "opacity-0"}`} />
                          <span>{item.label}</span>
                          {item.isNew && (
                            <span className="ml-auto text-[10px] font-medium bg-violet-500 text-white px-1.5 py-0.5 rounded">
                              NEW
                            </span>
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Footer Links */}
          <div className="p-4 border-t flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {discordUrl && (
              <a
                href={discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
