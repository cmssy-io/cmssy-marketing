import { createRoot, Root } from "react-dom/client";
import Legal from "./Legal";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Legal,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Legal content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Legal content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
