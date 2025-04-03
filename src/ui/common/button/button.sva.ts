import { sva } from "../../../../styled-system/css";

export const buttonSva = sva({
  slots: ["root", "icon"],
  base: {
    root: {
      width: "100%",
      border: "none",
      cursor: "pointer",
      borderRadius: "sm",
      alignItems: "center",
      whiteSpace: "nowrap",
      fontWeight: "medium",
      display: "inline-flex",
      justifyContent: "center",
    },
    icon: {
      display: "flex",
      marginRight: 2,
    },
  },
  variants: {
    size: {
      sm: {
        root: {
          px: 7,
          py: 2,
          fontSize: "xs",
        },
        icon: {
          width: "auto",
        },
      },
      md: {
        root: {
          px: 8,
          py: 3,
          fontSize: "sm",
        },
        icon: {
          width: "auto",
        },
      },
      lg: {
        root: {
          px: 12,
          py: 4,
        },
        icon: {
          width: "auto",
        },
      },
    },
    variant: {
      "primary-solid": {
        root: {
          color: "white",
          background: "linear-gradient(#ff5f5f, #f062c0)",
          _hover: {
            background: "linear-gradient(#e35565, #d958a6)",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
      "primary-ghost": {
        root: {
          color: "wg_pink",
          backgroundColor: "transparent",
          _hover: {
            backgroundColor: "stone.100",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
      github: {
        root: {
          color: "white",
          backgroundColor: "#24292E",
          _hover: {
            backgroundColor: "#191C20",
          },
          _focus: {
            outline: "2px solid rgb(10, 13, 39)",
          },
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary-solid",
  },
});
