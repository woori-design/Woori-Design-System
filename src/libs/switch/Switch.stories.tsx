import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";

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
        onChange: {
            description: "Switch의 상태 변경 이벤트",
        },
        pointText: {
            description: "Switch의 포인트 텍스트",
            control: {
                type: "object",
                options: [
                    {
                        on: "ON",
                        off: "OFF",
                    },
                ],
            }
        },
        pointColor: {
            description: "Switch의 포인트 색상 변경 여부",
            control: {
                type: "boolean"
            }
        },
        size: {
            description: "Switch의 크기를 결정하는 속성",
            control: {
                type: "select",
                options: ["small", "medium", "large", "xlarge"],
            }
        },
        disabled: {
            description: "Switch의 비활성화 상태",
            control: {
                type: "boolean",
            },
        },
        className: {
            description: "커스텀 클래스 이름",
            control: {
                type: "text",
            },
        },
        style: {
            description: "커스텀 스타일",
            control: {
                type: "object",
            },
        },
    }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Checked: Story = {
    args: {
        checked: true,
        disabled: false,
        pointColor: false,
        onChange: (newVal) => {
            console.log(newVal);
        },
    }
}

export const Unchecked: Story = {
    args: {
        checked: false,
        disabled: false,
        pointColor: false,
        onChange: (newVal) => {
            console.log(newVal);
        },
    }
}

export const CheckedWithPointColor: Story = {
    args: {
        checked: true,
        disabled: false,
        pointColor: true,
        onChange: (newVal) => {
            console.log(newVal);
        },
    }
}

export const UncheckedWithPointColor: Story = {
    args: {
        checked: false,
        disabled: false,
        pointColor: true,
        onChange: (newVal) => {
            console.log(newVal);
        },
    }
}

export const CheckedDisabled: Story = {
    args: {
        checked: true,
        disabled: true,
        pointColor: false,
        onChange: (newVal) => {
            console.log(newVal);
        },
    },
}

export const UncheckedDisabled: Story = {
    args: {
        checked: false,
        disabled: true,
        pointColor: false,
        onChange: (newVal) => {
            console.log(newVal);
        },
    },
}

export const CheckedDisabledWithPointColor: Story = {
    args: {
        checked: true,
        disabled: true,
        pointColor: true,
        onChange: (newVal) => {
            console.log(newVal);
        },
    },
}

export const UncheckedDisabledWithPointColor: Story = {
    args: {
        checked: false,
        disabled: true,
        pointColor: true,
        onChange: (newVal) => {
            console.log(newVal);
        },
    },
}