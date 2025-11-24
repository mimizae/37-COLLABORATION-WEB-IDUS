import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "fit-content",
    height: "12.2rem",
    padding: "1.6rem 1.2rem",
    borderRadius: "1.2rem",
  },
  variants: {
    type: {
      "membership-benefit": {
        backgroundColor: color.white[300],
      },
      "pay-benefit": {
        backgroundColor: color.white[200],
      },
      "benefit-more": {
        width: "7rem",
        backgroundColor: color.white[300],
      },
    },
  },
});

export const benefitTitle = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
});

export const benefitContent = style({
  display: "flex",
  gap: "0.3rem",
});

export const benefitBadge = style({
  backgroundColor: color.brand[200],
  padding: "0.4rem 0.6rem",
  borderRadius: "0.2rem",
});

export const text = recipe({
  base: {
    ...typographyVars.body3,
    color: color.black[100],
    whiteSpace: "wrap",
  },
  variants: {
    type: {
      lg: {
        ...typographyVars.heading2,
      },
      md: {
        ...typographyVars.body1,
      },
      sm: {
        ...typographyVars.caption2,
      },
    },
    color: {
      brand: {
        color: color.brand[100],
      },
      black: {
        color: color.black[200],
      },
      gray: {
        color: color.gray[100],
      },
    },
  },
});
