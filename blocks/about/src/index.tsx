import { createRoot, Root } from "react-dom/client";
import About from "./About";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: About,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<About content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<About content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
