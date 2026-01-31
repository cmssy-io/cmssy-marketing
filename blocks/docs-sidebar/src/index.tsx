import { createRoot, Root } from "react-dom/client";
import DocsSidebar from "./DocsSidebar";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<DocsSidebar content={props} />);
    return { root };
  },

  update(element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<DocsSidebar content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
