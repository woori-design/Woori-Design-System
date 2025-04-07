import { primitiveColors } from "../foundation/color/primitiveColor/primitiveColor";
import { semanticColors } from "../foundation/color/semanticColor/semanticColor";
import { ThemeType } from "./theme.type";

export const theme: ThemeType = {
  primitive: {
    color: primitiveColors,
  },
  semantic: {
    color: semanticColors,
  },
};
