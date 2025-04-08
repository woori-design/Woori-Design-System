import { PrimitiveColors } from "../foundation/color/primitiveColor/primitiveColor.type";
import { SemanticColorsByTheme } from "../foundation/color/semanticColor/semanticColor.type";
import { TypographyTokenMap } from "../foundation/typography/typography.type";

export type ThemeType = {
  primitive: {
    color: PrimitiveColors;
  };
  semantic: {
    color: SemanticColorsByTheme;
  };
  typography: TypographyTokenMap;
};
