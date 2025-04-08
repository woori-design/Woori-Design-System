import { primitiveColors } from "../foundation/color/primitiveColor/primitiveColor";
import { semanticColors } from "../foundation/color/semanticColor/semanticColor";
import { typography } from "../foundation/typography/typography";
import { ThemeType } from "./theme.type";

export const theme: ThemeType = {
  primitive: {
    color: primitiveColors,
  },
  semantic: {
    color: semanticColors,
  },
  typo: typography,
};
