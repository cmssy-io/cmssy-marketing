import { createRoot, Root } from "react-dom/client";
import Contact from "./Contact";
import "./index.css";

interface BlockContext {
  auth?: {
    isAuthenticated: boolean;
    customer: {
      id: string;
      email: string;
    } | null;
    logout: () => Promise<void>;
  };
  language: string;
  isPreview?: boolean;
  workspace?: {
    id: string;
    name?: string;
  };
}

interface MountContext {
  root: Root;
}

export default {
  __component: Contact,

  mount(
    element: HTMLElement,
    props: any,
    context?: BlockContext
  ): MountContext {
    const root = createRoot(element);
    root.render(<Contact content={props} context={context} />);
    return { root };
  },

  update(
    _element: HTMLElement,
    props: any,
    ctx: MountContext,
    context?: BlockContext
  ): void {
    ctx.root.render(<Contact content={props} context={context} />);
  },

  unmount(_element: HTMLElement, ctx: MountContext): void {
    ctx.root.unmount();
  },
};
