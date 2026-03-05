import type { DetailedHTMLProps, HTMLAttributes } from "react";

type IconifyIconProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & {
    icon?: string;
    width?: string | number;
    height?: string | number;
    class?: string; // web component attribute
  },
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}

declare module "react/jsx-dev-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": IconifyIconProps;
    }
  }
}
