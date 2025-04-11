import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta = {
  title: "libs/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "화면을 구분하는 선을 표시하는 컴포넌트입니다. 디자인 시스템의 색상에 따라 스타일링됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description: "Divider의 길이",
      control: { type: "text" },
    },
    thickness: {
      description: "Divider의 두께",
      control: { type: "number", min: 1, max: 99 },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    width: "300px",
    thickness: 2,
  },
};
