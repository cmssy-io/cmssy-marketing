import { createRoot, Root } from "react-dom/client";
import DocsArticle from "./DocsArticle";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<DocsArticle content={props} />);
    return { root };
  },

  update(element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<DocsArticle content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
