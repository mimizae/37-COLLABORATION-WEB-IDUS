import { createGlobalTheme } from "@vanilla-extract/css";

export const fontSize = createGlobalTheme(":root", {
  "4xl": "50px",
  "2xl": "32px",
  xl: "24px",
  lg: "18px",
  base: "16px",
  sm: "14px",
  xs: "12px",
});

export const fontWeight = createGlobalTheme(":root", {
  semiBold: "600",
  medium: "500",
  regular: "400",
});
