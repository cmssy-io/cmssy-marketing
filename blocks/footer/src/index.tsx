import { createRoot, Root } from "react-dom/client";
import Footer from "./Footer";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Footer,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Footer content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Footer content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
