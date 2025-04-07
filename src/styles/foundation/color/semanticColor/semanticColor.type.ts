export type SemanticLightColorName =
  | "lightAssistive"
  | "lightAlternative"
  | "lightNormal"
  | "lightStrong";

export type SemanticDarkColorName =
  | "darkNormal"
  | "darkAlternative"
  | "darkAssistive"
  | "darkDisable";

export type SemanticPrimaryColorName = "primaryMain";
export type SemanticGradientColorName = "lightPrimary" | "darkPrimary" | "symbolPrimary";

export type SemanticAlertColorName = "alert";
export type SemanticBWColorName = "white" | "black" | "blue_white";

export const semanticThemeList = ["light", "dark", "primary", "gradient", "alert", "bw"] as const;

export type SemanticTheme = (typeof semanticThemeList)[number];

export type SemanticColorsByTheme = {
  light: {
    [key in SemanticLightColorName]: string;
  };
  dark: {
    [key in SemanticDarkColorName]: string;
  };
  primary: {
    [key in SemanticPrimaryColorName]: string;
  };
  gradient: {
    [key in SemanticGradientColorName]: string;
  };
  alert: {
    [key in SemanticAlertColorName]: string;
  };
  bw: {
    [key in SemanticBWColorName]: string;
  };
};
