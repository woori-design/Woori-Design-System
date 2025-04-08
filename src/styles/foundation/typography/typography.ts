import { CSSProperties } from "react";
import type { TypographyToken, TypoType } from "./typography.type";

export const fontFamily = '"Pretendard", sans-serif';

const fontWeightMap = {
  Rg: 400,
  Md: 500,
  Sb: 600,
} as const;

const fontSizes = [11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 48] as const;
const fontWeightKeys = ["Rg", "Md", "Sb"] as const;

export const typography = Object.fromEntries(
  fontWeightKeys.flatMap((weight) =>
    fontSizes.map((size) => {
      const key = `${weight}_${size}` as TypographyToken;

      const value: CSSProperties = {
        fontFamily,
        fontSize: `${size}px`,
        fontStyle: "normal",
        fontWeight: fontWeightMap[weight],
        lineHeight: "normal",
      };

      return [key, value] as const;
    })
  )
) as TypoType;
