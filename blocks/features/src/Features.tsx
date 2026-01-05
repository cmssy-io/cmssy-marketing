import {
  Blocks,
  Globe,
  Layers,
  Paintbrush,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { BlockContent } from "./block";
const features = [
  {
    icon: Blocks,
    title: "Drag & Drop Builder",
    description:
      "Intuitive page builder with pre-designed blocks. Just drag, drop, and customize to your heart's content.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Content",
    description:
      "Generate beautiful content with AI. From headlines to full sections, let AI accelerate your workflow.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description:
      "Connect your own domain or use our free subdomains. SSL certificates included automatically.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Multi-Workspace",
    description:
      "Manage multiple websites from one dashboard. Perfect for agencies and freelancers.",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: Paintbrush,
    title: "Beautiful Themes",
    description:
      "Start with professionally designed themes or create your own unique style with full customization.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Invite team members with role-based permissions. Work together seamlessly on any project.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for performance out of the box. Your sites load fast on any device, anywhere.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security with automatic backups. Your content is always safe with us.",
    gradient: "from-slate-500 to-zinc-500",
  },
];
export default function Features({ content }: { content: BlockContent }) {
  const { heading = "Heading", description = "Description" } = content;

  return (
    <section
      id="features"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to{" "}
            <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              build amazing websites
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features that make website creation a breeze. No technical
            skills required.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-background border hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
