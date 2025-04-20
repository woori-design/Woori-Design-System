import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Woori Design System",
    brandUrl: "http://localhost:6006/?path=/docs/libs-button--docs",
    brandImage: "/woori-design-logo.png",
    brandTarget: "_self",

    colorPrimary: "#0067AC",
    colorSecondary: "#0067AC",

    appBg: "#F6FBFF",
    appContentBg: "#ffffff",
    appPreviewBg: "#ffffff",
    appBorderColor: "#D9D9D9",
    appBorderRadius: 4,

    barTextColor: "#9E9E9E",
    barSelectedColor: "#0067AC",
    barHoverColor: "#585C6D",
    barBg: "#ffffff",

    inputBg: "#ffffff",
    inputBorder: "#D9D9D9",
    inputTextColor: "#10162F",
    inputBorderRadius: 2,
  }),
});
