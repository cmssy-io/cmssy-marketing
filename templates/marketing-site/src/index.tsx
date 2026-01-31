import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import MarketingSite from './MarketingSite';
import './index.css';

interface BlockContext {
  root: Root;
}

export default {
  // React component for SSR (used by renderToString)
  __component: MarketingSite,

  // Client-side lifecycle methods (for interactivity)
  mount(element: HTMLElement, props: any): BlockContext {
    const root = createRoot(element);
    root.render(<MarketingSite content={props} />);
    return { root };
  },

  update(_element: HTMLElement, props: any, ctx: BlockContext): void {
    // Re-render with new props (no unmount = no blink!)
    ctx.root.render(<MarketingSite content={props} />);
  },

  unmount(_element: HTMLElement, ctx: BlockContext): void {
    ctx.root.unmount();
  }
};
