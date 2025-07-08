import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "libs/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "선택 목록을 표시하는 Dropdown 컴포넌트입니다. 옵션 선택 시 Trigger에 반영됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      description: "Dropdown 안내 문구",
      control: { type: "text" },
    },
    options: {
      description: "Dropdown 내부 선택 가능 옵션 리스트",
      control: { type: "object" },
    },
    width: {
      description: "Dropdown 너비 (px, %, rem)",
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    placeholder: "Dropdown",
    options: ["Option A", "Option B", "Option C"],
    width: "300px",
  },
};

export const BasicOptions: Story = {
  args: {
    placeholder: "Select number...",
    options: ["1", "2", "3", "4", "5"],
    width: "300px",
  },
};

export const ManyOptions: Story = {
  args: {
    placeholder: "Select number...",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    width: "300px",
  },
};
