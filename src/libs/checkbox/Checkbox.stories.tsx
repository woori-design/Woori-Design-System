import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.type";

const meta: Meta<typeof Checkbox> = {
  title: "libs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      description: "체크박스 크기",
      control: { type: "radio" },
    },
    label: {
      description: "체크박스 라벨",
      control: "text",
    },
    checked: {
      description: "체크박스 상태",
      control: "boolean",
    },
    disabled: {
      description: "비활성화 여부",
      control: "boolean",
    },
    type: { description: '체크박스 타입 ("error" | "warning" | "default")' },
    shape: {
      description: '체크박스 모양 ("square" | "circle")',
      control: { type: "radio" },
      options: ["square", "circle"],
    },
    onChange: {
      control: false,
      action: "onChange",
      description: "체크박스 상태 변경 시 호출",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const CheckboxComponent = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(!args.checked);

  useEffect(() => {
    setChecked(!!args.checked);
  }, [args.checked]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = e.currentTarget.checked;
    setChecked(nextChecked);
    args.onChange?.(e);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Default: Story = {
  render: (args) => <CheckboxComponent {...args} />,
  args: {
    label: "Default Checkbox",
    type: "default",
    shape: "square",
    size: "large",
  },
};

export const Size: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "12px" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>small</h3>
        <Checkbox size="small" />
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>medium</h3>
        <Checkbox size="medium" />
      </div>
      <div style={{ display: "flex", gap: "8px" }}>
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>large</h3>
        <Checkbox size="large" />
      </div>
    </div>
  ),
};

export const Label: Story = {
  args: {
    size: "large",
    label: "체크 박스",
  },
};

export const Type: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "12px" }}>
      <div style={{ display: "flex", width: "230px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="default checkbox" type="default" />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>default</h3>
      </div>
      <div style={{ display: "flex", width: "230px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="warning checkbox" type="warning" />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>warning</h3>
      </div>
      <div style={{ display: "flex", width: "230px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="error checkbox" type="error" />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>error</h3>
      </div>
    </div>
  ),
};

export const Shape: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "12px" }}>
      <div style={{ display: "flex", width: "230px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="square checkbox" shape="square" />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>square</h3>
      </div>
      <div style={{ display: "flex", width: "230px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="circle checkbox" shape="circle" />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>circle</h3>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "12px" }}>
      <div style={{ display: "flex", width: "360px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="disabled checkbox" disabled={true} />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>disabled</h3>
      </div>
      <div style={{ display: "flex", width: "360px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="checked/disabled checkbox" disabled={true} checked={true} />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>checked/disabled</h3>
      </div>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "12px" }}>
      <div style={{ display: "flex", width: "300px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="checked checkbox" checked={true} />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>checked: true</h3>
      </div>
      <div style={{ display: "flex", width: "300px", justifyContent: "space-between" }}>
        <Checkbox size="large" label="not checked checkbox" checked={false} />
        <h3 style={{ margin: "0px", paddingTop: "4px" }}>checked: false</h3>
      </div>
    </div>
  ),
};

const Controlled: StoryFn<typeof Checkbox> = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    alert(`체크 박스 상태: ${e.currentTarget.checked}`);
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const OnChange = Controlled.bind({});
OnChange.args = {
  label: "Controlled Checkbox",
  checked: false,
};
