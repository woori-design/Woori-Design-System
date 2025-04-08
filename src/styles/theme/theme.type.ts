import { PrimitiveColors } from "../foundation/color/primitiveColor/primitiveColor.type";
import { SemanticColorsByTheme } from "../foundation/color/semanticColor/semanticColor.type";
import { TypoType } from "../foundation/typography/typography.type";

export type ThemeType = {
  primitive: {
    color: PrimitiveColors;
  };
  semantic: {
    color: SemanticColorsByTheme;
  };
  typo: TypoType;
};
