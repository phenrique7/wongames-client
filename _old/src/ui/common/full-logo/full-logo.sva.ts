import { sva } from "../../../../styled-system/css";

export const fullLogoSva = sva({
  slots: ["root", "label"],
  base: {
    root: {
      _focus: {
        outline: "3px solid rgba(242, 49, 165, 0.5)",
      },
    },
  },
  variants: {
    size: {
      normal: {
        root: {
          width: "7.875rem",
          height: "3.063rem",
        },
      },
      large: {
        root: {
          width: "12.5rem",
          height: "3.74rem",
        },
      },
    },
    color: {
      black: {
        label: { fill: "wg_black" },
      },
      white: {
        label: { fill: "wg_white" },
      },
    },
  },
  defaultVariants: {
    size: "normal",
    color: "black",
  },
});
