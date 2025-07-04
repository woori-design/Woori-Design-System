import { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";
import Button from "../button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "libs/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    position: {
      description: "Tooltip의 위치를 결정하는 속성",
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    size: {
      description: "Tooltip의 크기를 결정하는 속성",
      control: "select",
      options: ["small", "medium", "large"],
    },
    content: {
      description: "Tooltip에 표시될 내용",
      control: "text",
    },
    disabled: {
      description: "Tooltip을 비활성화하는 속성",
      control: "boolean",
    },
    delay: {
      description: "Tooltip이 나타나기까지의 지연 시간 (ms)",
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Primary: Story = {
  args: {
    content: "이것은 툴팁입니다",
    position: "top",
    size: "medium",
    disabled: false,
    delay: 0,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button size="medium" variant="box" rounded={16}>
        Hover me
      </Button>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <Tooltip content="Top position" position="top">
        <Button size="medium" variant="box" rounded={16}>
          Top
        </Button>
      </Tooltip>
      <Tooltip content="Bottom position" position="bottom">
        <Button size="medium" variant="box" rounded={16}>
          Bottom
        </Button>
      </Tooltip>
      <Tooltip content="Left position" position="left">
        <Button size="medium" variant="box" rounded={16}>
          Left
        </Button>
      </Tooltip>
      <Tooltip content="Right position" position="right">
        <Button size="medium" variant="box" rounded={16}>
          Right
        </Button>
      </Tooltip>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <Tooltip content="Small tooltip" size="small">
        <Button size="medium" variant="box" rounded={16}>
          Small
        </Button>
      </Tooltip>
      <Tooltip content="Medium tooltip" size="medium">
        <Button size="medium" variant="box" rounded={16}>
          Medium
        </Button>
      </Tooltip>
      <Tooltip content="Large tooltip" size="large">
        <Button size="medium" variant="box" rounded={16}>
          Large
        </Button>
      </Tooltip>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <Tooltip content="즉시 표시" delay={0}>
        <Button size="medium" variant="box" rounded={16}>
          No delay
        </Button>
      </Tooltip>
      <Tooltip content="500ms 후 표시" delay={500}>
        <Button size="medium" variant="box" rounded={16}>
          500ms delay
        </Button>
      </Tooltip>
      <Tooltip content="1초 후 표시" delay={1000}>
        <Button size="medium" variant="box" rounded={16}>
          1s delay
        </Button>
      </Tooltip>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <Tooltip content="활성화된 툴팁" disabled={false}>
        <Button size="medium" variant="box" rounded={16}>
          Enabled
        </Button>
      </Tooltip>
      <Tooltip content="비활성화된 툴팁" disabled={true}>
        <Button size="medium" variant="box" rounded={16}>
          Disabled
        </Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
      <Tooltip content="이것은 매우 긴 툴팁 텍스트입니다. 여러 줄로 표시될 수 있습니다.">
        <Button size="medium" variant="box" rounded={16}>
          Long tooltip
        </Button>
      </Tooltip>
    </div>
  ),
};

export const WithDifferentTriggers: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
      <h4>다양한 요소에 툴팁 적용</h4>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Tooltip content="버튼 툴팁">
          <Button size="medium" variant="box" rounded={16}>
            Button
          </Button>
        </Tooltip>
        <Tooltip content="텍스트 툴팁">
          <span style={{ padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}>
            Text element
          </span>
        </Tooltip>
        <Tooltip content="링크 툴팁">
          <a href="#" style={{ padding: "8px", textDecoration: "none", color: "#0067AC" }}>
            Link element
          </a>
        </Tooltip>
      </div>
    </div>
  ),
};