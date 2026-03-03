interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "figure" | "article" | "footer" | "nav";
}

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`container ${className ?? ""}`.trim()}>{children}</Tag>
  );
}
