import { fontFamilies } from "./fonts";

export const typography = {
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 38.4,
    role: "Page / Screen Title",
  },
  h2: {
    fontFamily: fontFamilies.semibold,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 31.2,
    role: "Section Title",
  },
  h3: {
    fontFamily: fontFamilies.semibold,
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
    role: "Card / Module Title",
  },
  h4: {
    fontFamily: fontFamilies.medium,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22.4,
    role: "Subheading",
  },
  bodyLarge: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 25.6,
    role: "Important content",
  },
  bodyMedium: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22.4,
    role: "Body text",
  },
  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 20.8,
    role: "Supporting text",
  },
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: 11,
    fontWeight: "400",
    lineHeight: 15.4,
    role: "Labels, meta text",
  },
} as const;

export type LinguaTypography = typeof typography;
