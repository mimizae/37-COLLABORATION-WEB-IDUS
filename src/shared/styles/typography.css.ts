import { globalStyle } from "@vanilla-extract/css";
import { fontSize, fontWeight } from "./tokens/font.css";

export const typography = {
  display: {
    size: fontSize["4xl"],
    weight: fontWeight.semiBold,
    lineHeight: "140%",
  },
  heading1: {
    size: fontSize["2xl"],
    weight: fontWeight.semiBold,
    lineHeight: "140%",
  },
  heading2: {
    size: fontSize.xl,
    weight: fontWeight.semiBold,
    lineHeight: "140%",
  },
  heading3: {
    size: fontSize.lg,
    weight: fontWeight.semiBold,
    lineHeight: "140%",
  },
  body1: {
    size: fontSize.base,
    weight: fontWeight.semiBold,
    lineHeight: "140%",
  },
  body2: {
    size: fontSize.base,
    weight: fontWeight.medium,
    lineHeight: "140%",
  },
  body3: {
    size: fontSize.sm,
    weight: fontWeight.medium,
    lineHeight: "140%",
  },
  body4: {
    size: fontSize.sm,
    weight: fontWeight.regular,
    lineHeight: "160%",
  },
  caption1: {
    size: fontSize.xs,
    weight: fontWeight.medium,
    lineHeight: "140%",
  },
  caption2: {
    size: fontSize.xs,
    weight: fontWeight.regular,
    lineHeight: "140%",
  },
};

const classes: Record<keyof typeof typography, string> = {
  display: ".display",
  heading1: ".heading1",
  heading2: ".heading2",
  heading3: ".heading3",
  body1: ".body1",
  body2: ".body2",
  body3: ".body3",
  body4: ".body4",
  caption1: ".caption1",
  caption2: ".caption2",
};

Object.entries(typography).forEach(([key, value]) => {
  const k = key as keyof typeof typography;

  globalStyle(classes[k], {
    fontSize: value.size,
    fontWeight: value.weight,
    lineHeight: value.lineHeight,
  });
});
