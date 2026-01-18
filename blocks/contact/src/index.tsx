import { createRoot, Root } from "react-dom/client";
import Contact from "./Contact";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Contact,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Contact content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Contact content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
