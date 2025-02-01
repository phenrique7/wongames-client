import { cva } from "../../../../styled-system/css";

export const headingCva = cva({
  base: {
    fontSize: "2xl",
    lineHeight: 1.25,
    fontWeight: "semibold",
  },
  variants: {
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
          width: 16,
          content: "''",
          display: "block",
          height: "0.45rem",
          bgColor: "wg_green_dk",
        }
      },
    },
  },
  defaultVariants: {
    color: "black",
    linePosition: "left",
  },
});
