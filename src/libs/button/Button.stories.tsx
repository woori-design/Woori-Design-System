import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "libs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { description: "Button의 크기를 결정하는 속성" },
    width: { description: "Button의 가로 크기" },
    children: { description: "Button의 내용" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    size: "medium",
  },
};
