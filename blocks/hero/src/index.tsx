import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import Hero from './Hero';
import './index.css';

interface BlockContext {
  root: Root;
}

export default {
  // React component for SSR (used by renderToString)
  __component: Hero,

  // Client-side lifecycle methods (optional, for interactivity)
  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<Hero content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    ctx.root.render(<Hero content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  }
};
