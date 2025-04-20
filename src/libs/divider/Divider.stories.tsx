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
  render: () => (
    <div style={{ width: "800px" }}>
      <Divider width="100%" thickness={1} />
    </div>
  ),
};

export const Primary: Story = {
  args: {
    width: "300px",
    thickness: 2,
  },
};

export const Width: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h4>width: 800px</h4>
      <Divider width="800px" />
    </div>
  ),
};

export const Thickness: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
        <h4>thinckness: 1px</h4>
        <Divider width="300px" thickness={1} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
        <h4>thinckness: 2px</h4>
        <Divider width="300px" thickness={2} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
        <h4>thinckness: 3px</h4>
        <Divider width="300px" thickness={3} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
        <h4>thinckness: 4px</h4>
        <Divider width="300px" thickness={4} />
      </div>
    </div>
  ),
};
