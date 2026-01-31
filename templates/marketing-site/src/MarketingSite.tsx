import { BlockContent } from "./block";

export default function MarketingSite({ content }: { content: BlockContent }) {
  const { siteName = "My Company", siteDescription = "Build something amazing" } =
    content;

  return (
    <div className="marketing-site">
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold">{siteName}</h1>
        <p className="text-lg text-muted-foreground mt-4">{siteDescription}</p>
        <p className="mt-8 text-sm text-muted-foreground">
          This template includes 17 pre-configured pages. Install to create all
          pages with blocks.
        </p>
      </div>
    </div>
  );
}
