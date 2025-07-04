import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FloatButton from "./FloatButton";
import MenuItem from "../floatbutton/MenuItem";
import Button from "../button/Button";

const meta: Meta<typeof FloatButton> = {
  title: "libs/FloatButton",
  component: FloatButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      description: "플로팅 버튼의 크기를 결정하는 속성",
      control: "select",
    },
    shape: {
      description: "플로팅 버튼의 형태를 결정하는 속성",
      control: "select",
    },
    position: {
      description: "플로팅 버튼의 위치를 결정하는 속성",
      control: "select",
      options: ["right-top", "left-top", "right-bottom", "left-bottom"],
    },
    offset: {
      description: "플로팅 버튼의 위치 오프셋을 지정하는 속성",
      control: "object",
      defaultValue: { x: 20, y: 20 },
      table: {
        type: { summary: "{ x: number; y: number }" },
      },
    },
    children: {
      description: "FloatButton의 메뉴 아이템",
      table: {
        type: { summary: "ReactElement<MenuItemProps>[]" },
      },
      control: { disable: true }, // children은 스토리북에서 직접 조작하지 않도록 설정
    },
    onToggle: {
      description: "메뉴가 열리거나 닫힐 때 호출되는 콜백 함수",
      action: "toggled",
      table: {
        type: { summary: "(isOpen: boolean) => void" },
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FloatButton>;

// 스토리북에서 사용할 공통 FloatButton 스타일
const storyButtonStyle = {
  position: "relative" as const,
  bottom: "auto",
  right: "auto",
};

// 스토리북에서 사용할 공통 컨테이너 스타일
const containerStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center" as const,
  padding: "20px",
  paddingTop: "200px",
  paddingBottom: "50px",
};

// 메뉴 아이템을 감싸는 컨테이너 스타일
const itemContainerStyle = {
  display: "flex",
  flexDirection: "column" as const, // 버튼이 위에, 텍스트가 아래로
  alignItems: "center",
  gap: "20px",
};

export const Primary: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div>
        <Button size="medium" variant="box" onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? "플로팅 버튼 숨기기" : "플로팅 버튼 띄우기"}
        </Button>

        {isVisible && (
          <FloatButton {...args} style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
        )}
      </div>
    );
  },
  args: {
    size: "md",
    shape: "circle",
    position: "right-bottom",
    offset: { x: 24, y: 24 },
  },
};

// 사이즈 비교 스토리
export const Size: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

    const configs: { size: "sm" | "md" | "lg" | "xl"; label: string }[] = [
      { size: "sm", label: "size='sm'" },
      { size: "md", label: "size='md'" },
      { size: "lg", label: "size='lg'" },
      { size: "xl", label: "size='xl'" },
    ];

    return (
      <div>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
          {configs.map(({ size, label }, index) => (
            <div
              key={size}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                size="small"
                variant="box"
                onClick={() => setVisibleIndex((prev) => (prev === index ? null : index))}
              >
                {visibleIndex === index ? "플로팅 버튼 숨기기" : `${label} 띄우기`}
              </Button>

              {visibleIndex === index && (
                <FloatButton size={size} shape="circle" style={storyButtonStyle}>
                  <MenuItem key="search" icon="🔍" label="검색" />
                  <MenuItem key="home" icon="🏠" label="홈" />
                  <MenuItem key="settings" icon="⚙️" label="설정" />
                </FloatButton>
              )}
              <h4>{label}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// 형태 비교 스토리
export const Shape: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

    const configs: { shape: "circle" | "square"; label: string }[] = [
      { shape: "circle", label: "shape='circle'" },
      { shape: "square", label: "shape='square'" },
    ];

    return (
      <div>
        <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
          {configs.map(({ shape, label }, index) => (
            <div
              key={shape}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Button
                size="small"
                variant="box"
                onClick={() => setVisibleIndex((prev) => (prev === index ? null : index))}
              >
                {visibleIndex === index ? "플로팅 버튼 숨기기" : `${label} 띄우기`}
              </Button>

              {visibleIndex === index && (
                <FloatButton size="md" shape={shape} style={storyButtonStyle}>
                  <MenuItem key="search" icon="🔍" label="검색" />
                  <MenuItem key="home" icon="🏠" label="홈" />
                  <MenuItem key="settings" icon="⚙️" label="설정" />
                </FloatButton>
              )}
              <h4>{label}</h4>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// 메뉴 아이템 라벨 유무 비교 스토리
export const MenuItemLabels: Story = {
  render: () => {
    const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

    const configs = [
      { id: "with-label", label: "라벨 있는 메뉴 아이템", hasLabel: true },
      { id: "without-label", label: "라벨 없는 메뉴 아이템", hasLabel: false },
    ] as const;

    return (
      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        {configs.map(({ id, label, hasLabel }, index) => (
          <div
            key={id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              size="small"
              variant="box"
              onClick={() => setVisibleIndex((prev) => (prev === index ? null : index))}
            >
              {visibleIndex === index ? "플로팅 버튼 숨기기" : `${label} 띄우기`}
            </Button>

            {visibleIndex === index && (
              <FloatButton size="md" shape="circle" style={storyButtonStyle}>
                <MenuItem key="search" icon="🔍" label={hasLabel ? "검색" : undefined} />
                <MenuItem key="home" icon="🏠" label={hasLabel ? "홈" : undefined} />
                <MenuItem key="settings" icon="⚙️" label={hasLabel ? "설정" : undefined} />
              </FloatButton>
            )}

            <h4>{label}</h4>
          </div>
        ))}
      </div>
    );
  },
};

// onToggle 이벤트 스토리
export const OnToggle: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button
          size="small"
          variant="box"
          onClick={() => {
            setIsVisible((prev) => !prev);
            setIsOpen(false);
          }}
        >
          {isVisible ? "플로팅 버튼 숨기기" : "플로팅 버튼 띄우기"}
        </Button>

        {isVisible && (
          <FloatButton
            size="md"
            shape="circle"
            style={storyButtonStyle}
            onToggle={(open) => {
              setIsOpen(open);
              console.log(`메뉴 상태 변경: ${open ? "열림" : "닫힘"}`);
            }}
          >
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
        )}
        <div style={{ textAlign: "center" }}>
          <h4>onToggle 예시</h4>
          <div>메뉴 상태: {isOpen ? "열림" : "닫힘"}</div>
        </div>
      </div>
    );
  },
};

// 메뉴 아이템 onClick 이벤트 스토리
export const MenuItemOnClick: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button size="small" variant="box" onClick={() => setIsVisible((prev) => !prev)}>
          {isVisible ? "플로팅 버튼 숨기기" : "플로팅 버튼 띄우기"}
        </Button>

        {isVisible && (
          <FloatButton size="md" shape="circle" style={storyButtonStyle}>
            <MenuItem
              key="search"
              icon="🔍"
              label="검색"
              onClick={() => alert("검색 메뉴 클릭됨")}
            />
            <MenuItem key="home" icon="🏠" label="홈" onClick={() => alert("홈 메뉴 클릭됨")} />
            <MenuItem
              key="settings"
              icon="⚙️"
              label="설정"
              onClick={() => alert("설정 메뉴 클릭됨")}
            />
          </FloatButton>
        )}
        <h4>메뉴 아이템을 클릭하면 알림이 표시됩니다.</h4>
      </div>
    );
  },
};
