import { sva } from "../../../../styled-system/css";

export const iconButtonSva = sva({
  slots: ["root", "icon"],
  base: {
    root: {
      width: "auto",
      border: "none",
      cursor: "pointer",
      borderRadius: "md",
      alignItems: "center",
      display: "inline-flex",
      justifyContent: "center",
      _focus: {
        outline: "2px solid rgb(10, 13, 39)",
      },
    },
    icon: {
      display: "inline-flex",
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          padding: 1,
        },
        icon: {
          width: 5,
          height: 5,
        },
      },
      md: {
        root: {
          padding: 1,
        },
        icon: {
          width: 6,
          height: 6,
        },
      },
      lg: {
        root: {
          padding: 3,
        },
        icon: {
          width: 7,
          height: 7,
        },
      },
    },
    variant: {
      solid: {
        root: {
          background: "linear-gradient(#ff5f5f, #f062c0)",
          _hover: {
            background: "linear-gradient(#e35565, #d958a6)",
          },
        },
      },
      ghost: {
        root: {
          background: "transparent",
        },
        icon: {
          display: "flex",
          color: "wg_white",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
  },
});
