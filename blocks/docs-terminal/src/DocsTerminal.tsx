import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { BlockContent } from "./block";

export default function DocsTerminal({ content }: { content: BlockContent }) {
  const { title, commands = [], theme = "macos", showCopyAll = true } = content;

  const [copied, setCopied] = useState(false);

  const allCommands = commands.map((c) => c.command).join("\n");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(allCommands);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container my-6">
      <div className="rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-lg">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            {/* macOS dots */}
            {theme === "macos" && (
              <div className="flex items-center gap-1.5">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
            )}
            {title && (
              <span className="text-xs text-zinc-500 font-medium">{title}</span>
            )}
          </div>
          {showCopyAll && commands.length > 0 && (
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
          )}
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-sm leading-relaxed">
          {commands.map((cmd, index) => (
            <div key={index} className={index > 0 ? "mt-3" : ""}>
              {/* Command line */}
              <div className="flex items-start gap-2">
                <span className="text-emerald-400 select-none shrink-0">
                  {cmd.prompt || "$"}
                </span>
                <span className="text-zinc-100">{cmd.command}</span>
              </div>
              {/* Output */}
              {cmd.output && (
                <pre className="mt-1 text-zinc-500 text-xs leading-relaxed whitespace-pre-wrap pl-5">
                  {cmd.output}
                </pre>
              )}
            </div>
          ))}
          {/* Blinking cursor */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-emerald-400 select-none">$</span>
            <span className="w-2 h-4 bg-zinc-400 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
