import { useState } from "react";
import { Copy, Check, FileCode } from "lucide-react";
import { BlockContent } from "./block";

// Parse highlight lines string (e.g., "1,3-5,8") into Set of line numbers
function parseHighlightLines(input?: string): Set<number> {
  const lines = new Set<number>();
  if (!input) return lines;

  const parts = input.split(",").map((p) => p.trim());
  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= end; i++) {
        lines.add(i);
      }
    } else {
      lines.add(Number(part));
    }
  }
  return lines;
}

// Simple syntax highlighting (basic keywords only)
function highlightSyntax(code: string, language: string): string {
  if (language === "plaintext") return escapeHtml(code);

  let result = escapeHtml(code);

  // Keywords
  const keywords = {
    javascript: /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|async|await|class|extends|new|this|try|catch|throw)\b/g,
    typescript: /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|async|await|class|extends|new|this|try|catch|throw|interface|type|enum|implements|readonly|private|public|protected)\b/g,
    jsx: /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|async|await|class|extends|new|this)\b/g,
    tsx: /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|async|await|class|extends|new|this|interface|type)\b/g,
    bash: /\b(npm|npx|yarn|pnpm|cd|mkdir|rm|cp|mv|ls|cat|echo|export|sudo|git|node)\b/g,
    python: /\b(def|class|import|from|return|if|elif|else|for|while|try|except|with|as|in|not|and|or|True|False|None)\b/g,
  };

  const keywordPattern = keywords[language as keyof typeof keywords] || keywords.javascript;
  result = result.replace(keywordPattern, '<span class="text-violet-400">$1</span>');

  // Strings
  result = result.replace(/(["'`])(?:(?!\1)[^\\]|\\.)*\1/g, '<span class="text-emerald-400">$&</span>');

  // Comments
  result = result.replace(/(\/\/.*$)/gm, '<span class="text-zinc-500">$1</span>');
  result = result.replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="text-zinc-500">$1</span>');
  result = result.replace(/(#.*$)/gm, '<span class="text-zinc-500">$1</span>');

  // Numbers
  result = result.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-amber-400">$1</span>');

  return result;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default function DocsCodeBlock({ content }: { content: BlockContent }) {
  const {
    code = "",
    language = "typescript",
    filename,
    showLineNumbers = false,
    highlightLines,
  } = content;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");
  const highlightedLines = parseHighlightLines(highlightLines);

  return (
    <div className="my-6 rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          {filename ? (
            <>
              <FileCode className="h-4 w-4" />
              <span>{filename}</span>
            </>
          ) : (
            <span className="text-xs uppercase tracking-wider">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-zinc-800"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code>
            {lines.map((line, index) => {
              const lineNum = index + 1;
              const isHighlighted = highlightedLines.has(lineNum);

              return (
                <div
                  key={index}
                  className={`flex ${isHighlighted ? "bg-violet-500/10 -mx-4 px-4 border-l-2 border-violet-500" : ""}`}
                >
                  {showLineNumbers && (
                    <span className="select-none text-zinc-600 w-8 shrink-0 text-right pr-4">
                      {lineNum}
                    </span>
                  )}
                  <span
                    className="text-zinc-100"
                    dangerouslySetInnerHTML={{ __html: highlightSyntax(line, language) || "&nbsp;" }}
                  />
                </div>
              );
            })}
          </code>
        </pre>
      </div>
    </div>
  );
}
