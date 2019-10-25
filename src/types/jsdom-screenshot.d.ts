declare module 'jsdom-screenshot' {
  import { ElementHandle, LaunchOptions, Request, ScreenshotOptions, Viewport } from 'puppeteer';

  export type Options = Partial<{
    launch: LaunchOptions;
    screenshot: ScreenshotOptions;
    serve: string[];
    debug: boolean;
    waitUntilNetworkIdle: boolean;
    viewport: Viewport;
    targetSelector: string;
    intercept: (request: Request) => void;
  }>;

  export const generateImage: (options?: Options) => ReturnType<ElementHandle['screenshot']>;

  export const setDefaultOptions: (options?: Options) => void;

  export const restoreDefaultOptions: () => void;

  export const debug: () => void;
}
