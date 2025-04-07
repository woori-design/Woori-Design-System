export type PrimitiveColorName =
  | "blue100"
  | "blue200"
  | "blue300"
  | "blue400"
  | "blue500"
  | "blue600"
  | "blue700"
  | "blue800"
  | "blue900"
  | "gradient_light"
  | "gradient_dark"
  | "gradient_symbol"
  | "red"
  | "white"
  | "black"
  | "blue_white";

export type PrimitiveColors = {
  [key in PrimitiveColorName]: string;
};
