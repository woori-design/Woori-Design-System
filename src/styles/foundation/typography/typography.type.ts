export type FontWeight = "Rg" | "Md" | "SB";

export type FontSize =
  | "t1"
  | "t2"
  | "t3"
  | "t4"
  | "t5"
  | "t6"
  | "t7"
  | "t8"
  | "t9"
  | "t10";

export type TypographyToken = `${FontWeight}_${FontSize}`;

export interface TypographyStyle {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export interface TypographyTokenMap {
  [key in TypographyToken]: TypographyStyle;
}

export interface WeightNameMap {
  Rg: string;
  Md: string;
  SB: string;
}

export interface WeightValueMap {
  Rg: number;
  Md: number;
  SB: number;
}

export interface SizePixelMap {
  [key in FontSize]: number;
}

export interface SizeRemMap {
  [key in FontSize]: string;
}
