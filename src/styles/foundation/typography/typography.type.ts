import { CSSProperties } from "react";

export type FontWeight = "Rg" | "Md" | "Sb";

export type FontSize = 8 | 9 | 10 | 11 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 32 | 36 | 48;

export type TypographyToken = `${FontWeight}_${FontSize}`;

export type TypoType = Record<TypographyToken, CSSProperties>;
