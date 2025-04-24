import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.type";

const meta: Meta<typeof Checkbox> = {
  title: "libs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      description: "체크박스 라벨",
      control: "text", // ★ label이 text로 컨트롤되도록 지정
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
    helperText: {
      description: "도움말 문구",
      control: "text",
    },
    shape: {
      description: '체크박스 모양 ("square" | "circle")',
      control: { type: "radio" },
      options: ["square", "circle"],
    },
    onChange: {
      action: "onChange",
      description: "체크박스 상태 변경 시 호출",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
    type: "default",
    shape: "square",
    helperText: "이곳에 도움말을 입력해 주세요",
  },
};

export const Error: Story = {
  args: {
    label: "Error Checkbox",
    type: "error",
    helperText: "에러 상황입니다.",
    checked: false,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Checkbox",
    type: "warning",
    helperText: "경고 상황입니다.",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    checked: true,
    disabled: true,
    helperText: "비활성화된 체크박스입니다.",
  },
};

export const Circle: Story = {
  args: {
    label: "Circle Checkbox",
    checked: false,
    type: "default",
    shape: "circle",
    helperText: "원이냐 사각이냐 골라보세요",
  },
};

const Template: StoryFn<typeof Checkbox> = (args: CheckboxProps) => {
  const [localChecked, setLocalChecked] = useState(!!args.checked);

  const handleChange = (checked: boolean) => {
    setLocalChecked(checked);
    args.onChange?.(checked);
  };

  return <Checkbox {...args} checked={localChecked} onChange={handleChange} />;
};

export const Controlled = Template.bind({});
Controlled.args = {
  label: "Controlled Checkbox",
  helperText: "여러 번 눌러보세요!",
  checked: false,
};
