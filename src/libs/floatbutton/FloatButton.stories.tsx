import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FloatButton from "./FloatButton";
import MenuItem from "./MenuItem";

const meta: Meta<typeof FloatButton> = {
  title: "libs/FloatButton",
  component: FloatButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      description: "플로팅 버튼의 크기를 결정하는 속성",
      control: {
        type: "select",
        options: ["sm", "md", "lg", "xl"],
      },
      table: {
        defaultValue: { summary: "md" },
      },
    },
    shape: {
      description: "플로팅 버튼의 형태를 결정하는 속성",
      control: {
        type: "select",
        options: ["circle", "square"],
      },
      table: {
        defaultValue: { summary: "circle" },
      },
    },
    children: {
      description: "FloatButton의 메뉴 아이템",
      table: {
        type: { summary: "ReactElement<MenuItemProps>[]" },
      },
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
  height: "300px",
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

// 기본 스토리
export const Primary: Story = {
  render: () => (
    <div style={containerStyle}>
      <FloatButton size="md" shape="circle" style={storyButtonStyle}>
        <MenuItem key="search" icon="🔍" label="검색" />
        <MenuItem key="home" icon="🏠" label="홈" />
        <MenuItem key="settings" icon="⚙️" label="설정" />
      </FloatButton>
    </div>
  ),
};

// 사이즈 비교 스토리
export const Size: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}>
        <div style={itemContainerStyle}>
          <FloatButton size="sm" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>size="sm"</h4>
        </div>
        <div style={itemContainerStyle}>
          <FloatButton size="md" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>size="md"</h4>
        </div>
        <div style={itemContainerStyle}>
          <FloatButton size="lg" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>size="lg"</h4>
        </div>
        <div style={itemContainerStyle}>
          <FloatButton size="xl" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>size="xl"</h4>
        </div>
      </div>
    </div>
  ),
};

// 형태 비교 스토리
export const Shape: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}>
        <div style={itemContainerStyle}>
          <FloatButton size="md" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>shape="circle"</h4>
        </div>
        <div style={itemContainerStyle}>
          <FloatButton size="md" shape="square" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>shape="square"</h4>
        </div>
      </div>
    </div>
  ),
};

// 라벨 유무 비교 스토리
export const MenuItemLabels: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={{ display: "flex", gap: "80px", alignItems: "flex-end" }}>
        <div style={itemContainerStyle}>
          <FloatButton size="md" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" label="검색" />
            <MenuItem key="home" icon="🏠" label="홈" />
            <MenuItem key="settings" icon="⚙️" label="설정" />
          </FloatButton>
          <h4>라벨 있는 메뉴 아이템</h4>
        </div>
        <div style={itemContainerStyle}>
          <FloatButton size="md" shape="circle" style={storyButtonStyle}>
            <MenuItem key="search" icon="🔍" />
            <MenuItem key="home" icon="🏠" />
            <MenuItem key="settings" icon="⚙️" />
          </FloatButton>
          <h4>라벨 없는 메뉴 아이템</h4>
        </div>
      </div>
    </div>
  ),
};

// onToggle 이벤트 스토리
export const OnToggle: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
      <div style={containerStyle}>
        <div style={itemContainerStyle}>
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
          <div style={{ textAlign: "center" }}>
            <h4>onToggle 예시</h4>
            <div>메뉴 상태: {isOpen ? "열림" : "닫힘"}</div>
          </div>
        </div>
      </div>
    );
  },
};

// 메뉴 아이템 onClick 이벤트 스토리
export const MenuItemOnClick: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <FloatButton size="md" shape="circle" style={storyButtonStyle}>
          <MenuItem
            key="search"
            icon="🔍"
            label="검색"
            onClick={() => alert("검색 메뉴 클릭됨")}
          />
          <MenuItem
            key="home"
            icon="🏠"
            label="홈"
            onClick={() => alert("홈 메뉴 클릭됨")}
          />
          <MenuItem
            key="settings"
            icon="⚙️"
            label="설정"
            onClick={() => alert("설정 메뉴 클릭됨")}
          />
        </FloatButton>
        <h4>메뉴 아이템을 클릭하면 알림이 표시됩니다.</h4>
      </div>
    </div>
  ),
};
