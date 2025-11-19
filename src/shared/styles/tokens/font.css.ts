import { createGlobalTheme } from "@vanilla-extract/css";

export const fontSize = createGlobalTheme(":root", {
  "4xl": "5rem",
  "2xl": "3.2rem",
  xl: "2.4rem",
  lg: "1.8rem",
  base: "1.6rem",
  sm: "1.4rem",
  xs: "1.2rem",
});

export const fontWeight = createGlobalTheme(":root", {
  semiBold: "600",
  medium: "500",
  regular: "400",
});
