import { createRoot, Root } from "react-dom/client";
import Header from "./Header";
import "./index.css";

interface PlatformContext {
  auth?: {
    isAuthenticated: boolean;
    customer: {
      id: string;
      email: string;
      profile: {
        firstName?: string | null;
        lastName?: string | null;
        displayName?: string | null;
        avatarUrl?: string | null;
      };
    } | null;
    logout: () => Promise<void>;
  };
  language: string;
  isPreview?: boolean;
}

interface BlockContext {
  root: Root;
}

export default {
  __component: Header,

  mount(
    element: HTMLElement,
    props: any,
    context?: PlatformContext,
  ): BlockContext {
    const root = createRoot(element);
    root.render(<Header content={props} context={context} />);
    return { root };
  },

  update(
    _element: HTMLElement,
    props: any,
    ctx: BlockContext,
    context?: PlatformContext,
  ): void {
    ctx.root.render(<Header content={props} context={context} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  },
};
