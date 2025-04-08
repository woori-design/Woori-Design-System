import {
  TypographyTokenMap,
  WeightNameMap,
  WeightValueMap,
  SizePixelMap,
  SizeRemMap,
} from "./typography.type";

export const fontFamily = '"Pretendard", sans-serif';

export const weightNames: WeightNameMap = {
  Rg: "Regular",
  Md: "Medium",
  SB: "SemiBold",
};

export const weightValues: WeightValueMap = {
  Rg: 400,
  Md: 500,
  SB: 600,
};

export const sizePixels: SizePixelMap = {
  t1: 11,
  t2: 12,
  t3: 13,
  t4: 14,
  t5: 16,
  t6: 18,
  t7: 20,
  t8: 22,
  t9: 24,
  t10: 26,
};

export const sizeRems: SizeRemMap = {
  t1: "0.6875rem",
  t2: "0.75rem",
  t3: "0.8125rem",
  t4: "0.875rem",
  t5: "1rem",
  t6: "1.125rem",
  t7: "1.25rem",
  t8: "1.375rem",
  t9: "1.5rem",
  t10: "1.625rem",
};

export const defaultLineHeight = 1.5;

export const typography: TypographyTokenMap = {
  Rg_t1: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t1,
  },
  Rg_t2: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t2,
  },
  Rg_t3: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t3,
  },
  Rg_t4: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t4,
  },
  Rg_t5: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t5,
  },
  Rg_t6: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t6,
  },
  Rg_t7: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t7,
  },
  Rg_t8: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t8,
  },
  Rg_t9: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t9,
  },
  Rg_t10: {
    fontFamily,
    fontWeight: weightValues.Rg,
    fontSize: sizeRems.t10,
  },

  Md_t1: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t1,
  },
  Md_t2: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t2,
  },
  Md_t3: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t3,
  },
  Md_t4: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t4,
  },
  Md_t5: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t5,
  },
  Md_t6: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t6,
  },
  Md_t7: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t7,
  },
  Md_t8: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t8,
  },
  Md_t9: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t9,
  },
  Md_t10: {
    fontFamily,
    fontWeight: weightValues.Md,
    fontSize: sizeRems.t10,
  },

  SB_t1: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t1,
  },
  SB_t2: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t2,
  },
  SB_t3: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t3,
  },
  SB_t4: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t4,
  },
  SB_t5: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t5,
  },
  SB_t6: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t6,
  },
  SB_t7: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t7,
  },
  SB_t8: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t8,
  },
  SB_t9: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t9,
  },
  SB_t10: {
    fontFamily,
    fontWeight: weightValues.SB,
    fontSize: sizeRems.t10,
  },
};

export const getTypography = (token: keyof typeof typography) => {
  return typography[token];
};

export const getTypographyClassName = (token: keyof typeof typography) => {
  return `WD-${token}`;
};

export const getTypographyStyle = (token: keyof typeof typography) => {
  const style = typography[token];
  return `
      font-family: ${style.fontFamily};
      font-weight: ${style.fontWeight};
      font-size: ${style.fontSize};
      ${style.lineHeight ? `line-height: ${style.lineHeight};` : ""}
      ${style.letterSpacing ? `letter-spacing: ${style.letterSpacing};` : ""}
    `;
};

export default typography;
