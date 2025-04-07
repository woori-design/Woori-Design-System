import { Meta, StoryObj } from "@storybook/react";
import { semanticColors } from "./semanticColor/semanticColor";
import { semanticThemeList } from "./semanticColor/semanticColor.type";
import { theme } from "../../theme/theme";

type SemanticColor = {
  title: string;
  colors: Record<string, string>;
};

interface AllThemeProps {
  children?: ({ colors }: { colors: SemanticColor[] }) => React.ReactElement;
}

const AllThemeColors = ({ children }: AllThemeProps) => {
  const getSemanticColors = (): SemanticColor[] => {
    return semanticThemeList.map((theme) => ({
      title: theme,
      colors: semanticColors[theme],
    }));
  };

  return (
    <>
      {semanticThemeList.map((theme) => {
        const colorData = getSemanticColors();
        const matchedColors = colorData.find((c) => c.title === theme);

        return (
          <div key={theme}>
            <h2>{theme}</h2>
            {children && matchedColors && children({ colors: [matchedColors] })}
          </div>
        );
      })}
    </>
  );
};

const ExampleStory: StoryObj = {
  render: () => (
    <div
      style={{
        backgroundColor: theme.semantic.color.light.lightAlternative,
        width: "100px",
        height: "100px",
      }}
    >
      시멘틱 컬러가 적용된 박스입니다.
    </div>
  ),
};

const meta: Meta = {
  title: "Foundation/Colors",
  parameters: {
    layout: "centered",
  },
};

export { AllThemeColors, ExampleStory };

export default meta;
