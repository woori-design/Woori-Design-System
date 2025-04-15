import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "libs/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { description: "Button의 크기를 결정하는 속성", control: "select" },
    width: { description: "Button의 가로 크기", control: "text" },
    children: { description: "Button의 내용" },
    variant: { description: "Button의 형태를 결정하는 속성", control: "select" },
    rounded: { description: "Button의 border-radius를 결정하는 속성" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Button",
    size: "xlarge",
    variant: "box",
    rounded: 16,
    disabled: false,
  },
};

export const Size: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
      <Button size="xlarge" variant="box" rounded={16}>
        xlarge
      </Button>
      <Button size="large" variant="box" rounded={16}>
        large
      </Button>
      <Button size="medium" variant="box" rounded={16}>
        medium
      </Button>
      <Button size="small" variant="box" rounded={16}>
        small
      </Button>
      <Button size="xsmall" variant="box" rounded={16}>
        xsmall
      </Button>
    </div>
  ),
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>variant="box"</h4>
        <Button size="large" variant="box" rounded={16}>
          large/box
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>variant="text"</h4>
        <Button size="large" variant="text">
          large/text
        </Button>
      </div>
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>{"rounded={16}"}</h4>
        <Button size="large" variant="box" rounded={16}>
          large/box
        </Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>{"rounded={100}"}</h4>
        <Button size="large" variant="box" rounded={100}>
          large/text
        </Button>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Button",
    size: "large",
    variant: "box",
    rounded: 16,
    disabled: true,
  },
};

export const Width: Story = {
  args: {
    children: "Button",
    width: "800px",
    size: "large",
    variant: "box",
    rounded: 16,
  },
};

export const OnClick: Story = {
  args: {
    children: "Button",
    size: "large",
    variant: "box",
    rounded: 16,
    onClick: () => {
      alert("버튼이 클릭되었습니다.");
    },
  },
};
