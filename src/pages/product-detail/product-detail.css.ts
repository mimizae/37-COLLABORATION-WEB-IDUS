import { color } from "@/shared/styles/tokens/color.css";
import { typographyVars } from "@/shared/styles/typography.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

// PurchaseSafetyNotice

export const notice = style({
  padding: "1.6rem 2rem",
  backgroundColor: color.white[300],
  borderRadius: "1.2rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
});

export const noticeTitle = style({
  ...typographyVars.body3,
  color: color.black[100],
  whiteSpace: "pre-line",
});

export const noticeDescription = style({
  ...typographyVars.caption2,
  color: color.gray[100],
  whiteSpace: "pre-line",
});

// ProductInfoNotice

export const wrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  margin: "2.4rem 0 3.8rem 0",
});

export const infoTitle = style({
  ...typographyVars.heading3,
  color: color.black[100],
});

export const accordianWrapper = style({});
