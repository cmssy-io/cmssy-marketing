import { createRoot, Root } from "react-dom/client";
import Roadmap from "./Roadmap";
import "./index.css";

interface BlockContext {
  root: Root;
}

export default {
  __component: Roadmap,

  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Roadmap content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Roadmap content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
