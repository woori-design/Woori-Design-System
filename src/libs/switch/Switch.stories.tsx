import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import { useArgs } from "@storybook/preview-api";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "libs/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    checked: {
      description: "Switch의 체크 상태",
      control: {
        type: "boolean",
      },
    },
    onCheckedChange: {
      description: "Switch의 상태 변경 이벤트",
    },
    pointText: {
      description: "Switch의 포인트 텍스트",
      control: {
        type: "object",
      },
    },
    pointColor: {
      description: "Switch의 포인트 색상 변경 여부",
      control: {
        type: "select",
      },
    },
    size: {
      description: "Switch의 크기를 결정하는 속성",
      control: {
        type: "select",
        options: ["small", "medium", "large", "xlarge"],
      },
    },
    disabled: {
      description: "Switch의 비활성화 상태",
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Primary: Story = {
  render: (args) => {
    const [_, setArgs] = useArgs();

    return (
      <Switch
        {...args}
        checked={args.checked}
        onCheckedChange={(val) => {
          setArgs({ checked: val });
          args.onCheckedChange?.(val);
        }}
      />
    );
  },
  args: {
    checked: true,
    pointColor: "white",
    pointText: {
      on: "ON",
      off: "OFF",
    },
  },
};

export const Size: Story = {
  render: () => {
    const [checkedStates, setCheckedStates] = useState({
      xlarge: true,
      large: true,
      medium: true,
      small: true,
    });

    const handleChange = (size: keyof typeof checkedStates) => (val: boolean) => {
      setCheckedStates((prev) => ({ ...prev, [size]: val }));
    };

    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
        <Switch
          size="xlarge"
          checked={checkedStates.xlarge}
          onCheckedChange={handleChange("xlarge")}
        />
        <Switch
          size="large"
          checked={checkedStates.large}
          onCheckedChange={handleChange("large")}
        />
        <Switch
          size="medium"
          checked={checkedStates.medium}
          onCheckedChange={handleChange("medium")}
        />
        <Switch
          size="small"
          checked={checkedStates.small}
          onCheckedChange={handleChange("small")}
        />
      </div>
    );
  },
};

export const Checked: Story = {
  render: () => {
    return (
      <Switch
        size="medium"
        onCheckedChange={(val) => {
          alert(`Switch 체크 여부: ${val}`);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>checked/White Ver.</h4>
        <Switch size="medium" checked={true} disabled={true} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>unChecked/White Ver.</h4>
        <Switch size="medium" checked={false} disabled={true} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>checked/Color Ver.</h4>
        <Switch size="medium" checked={true} disabled={true} pointColor="color" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
        <h4>unChecked/Color Ver.</h4>
        <Switch size="medium" checked={false} disabled={true} pointColor="color" />
      </div>
    </div>
  ),
};

export const PointColor: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: "10px", alignItems: "end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
          <h4>White Ver.</h4>
          <Switch size="medium" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
          <h4>Color Ver.</h4>
          <Switch size="medium" pointColor="color" />
        </div>
      </div>
    );
  },
};

export const PointText: Story = {
  args: {
    pointText: {
      on: "켬",
      off: "끔",
    },
  },
};
