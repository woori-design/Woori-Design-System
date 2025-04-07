import { PrimitiveColors } from "./primitiveColor.type";

export const primitiveColors: PrimitiveColors = {
  blue100: "#CDE5FF",
  blue200: "#81B9F8",
  blue300: "#5E99D6",
  blue400: "#397AB4",
  blue500: "#0067AC",
  blue600: "#004F84",
  blue700: "#104060",
  blue800: "#042338",
  blue900: "#162026",
  gradient_light: "linear-gradient(90deg, #0067AC 0%, #CDE5FF 100%)",
  gradient_dark: "linear-gradient(90deg, #032338 0%, #0067AC 100%)",
  gradient_symbol: "linear-gradient(90deg, #0083CA 0%, #FFF 100%)",
  red: "#FA333F",
  white: "#FFFFFF",
  black: "#101010",
  blue_white: "#F6FBFF",
} as const;
