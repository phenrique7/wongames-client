import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    wgPink: "#F231A5",
    wgOrange: "#F56161",
    wgGreenMn: "#3CD3C1",
    wgGreenDark: "#35BDAC",
    wgGray: "#B5B5B5",
    wgGrayLight: "#E5E5E5",

    black: "#0A0D27",
    white: "#FAFAFA",
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  textVariants: {
    heading1: {
      fontFamily: "Poppins_700Bold",
      fontSize: 48,
      lineHeight: 56,
    },
    heading2: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 34,
      lineHeight: 40,
    },
    heading3: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 24,
      lineHeight: 32,
    },
    subtitle: {
      fontFamily: "Poppins_600SemiBold",
      lineHeight: 28,
      fontSize: 20,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins_500Medium",
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: "Poppins_500Medium",
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
      fontFamily: "Poppins_400Regular",
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;

export default theme;
