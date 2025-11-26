import { color } from "@/shared/styles/tokens/color.css";
import { style } from "@vanilla-extract/css";

export const layout = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  margin: "0 auto",
  maxWidth: "375px",
});

export const container = style({
  display: "flex",
  justifyContent: "space-between",

  width: "100%",
  backgroundColor: color.white[100],
  padding: "0 1.6rem 4rem",
});

export const buttonContainer = style({
  display: "flex",
  gap: "0.8rem",
});
