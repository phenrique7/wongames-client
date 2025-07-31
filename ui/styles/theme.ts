import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    wgPink: "#F231A5",
    wgOrange: "#F56161",
    wgGreenMn: "#3CD3C1",
    wgGreenDark: "#35BDAC",

    black: "#0A0D27",
    white: "#FAFAFA",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Poppins_500Medium",
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export type Theme = typeof theme;

export default theme;
