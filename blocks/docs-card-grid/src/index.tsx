import { createRoot, Root } from "react-dom/client";
import DocsCardGrid from "./DocsCardGrid";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<DocsCardGrid content={props} />);
    return { root };
  },

  update(element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<DocsCardGrid content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
