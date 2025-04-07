import { primitiveColors } from "../primitiveColor/primitiveColor";
import { SemanticColorsByTheme } from "./semanticColor.type";

export const semanticColors: SemanticColorsByTheme = {
  light: {
    lightAssistive: primitiveColors.blue100,
    lightAlternative: primitiveColors.blue200,
    lightNormal: primitiveColors.blue300,
    lightStrong: primitiveColors.blue400,
  },
  primary: {
    primaryMain: primitiveColors.blue500,
  },
  dark: {
    darkNormal: primitiveColors.blue600,
    darkAlternative: primitiveColors.blue700,
    darkAssistive: primitiveColors.blue800,
    darkDisable: primitiveColors.blue900,
  },
  gradient: {
    lightPrimary: primitiveColors.gradient_light,
    darkPrimary: primitiveColors.gradient_dark,
    symbolPrimary: primitiveColors.gradient_symbol,
  },
  alert: {
    alert: primitiveColors.red,
  },
  bw: {
    white: primitiveColors.white,
    black: primitiveColors.black,
    blue_white: primitiveColors.blue_white,
  },
} as const;
