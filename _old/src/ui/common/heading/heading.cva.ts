import { cva } from "../../../../styled-system/css";

export const headingCva = cva({
  base: {
    fontWeight: "semibold",
  },
  variants: {
    size: {
      sm: {
        lineHeight: 1,
        fontSize: "md",
        _after: {
          width: 8,
          height: "0.3rem",
        },
      },
      md: {
        fontSize: "2xl",
        lineHeight: 1.25,
        _after: {
          width: 12,
          height: "0.45rem",
        },
      },
    },
    color: {
      white: { color: "wg_white" },
      black: { color: "wg_black" },
    },
    linePosition: {
      left: {
        display: "flex",
        _before: {
          content: "''",
          width: "0.45rem",
          mr: 3,
          bgColor: "wg_green_dk",
        },
      },
      bottom: {
        _after: {
          mt: 1,
          content: "''",
          display: "block",
          bgColor: "wg_green_dk",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "black",
    linePosition: "left",
  },
});
