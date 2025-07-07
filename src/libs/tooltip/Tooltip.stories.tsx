import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'libs/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px', minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    content: { control: 'text', description: '툴팁에 표시될 내용입니다.' },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '툴팁의 위치를 선택합니다.'
    },
    color: {
      control: 'radio',
      options: ['black', 'white'],
      description: '툴팁의 색상을 선택합니다.'
    },
    children: { control: false, description: '툴팁을 트리거할 요소입니다.' },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: '가장 기본적인 툴팁입니다.',
    children: <button>기본 버튼</button>,
    position: 'top',
    color: 'black',
  },
};

export const Positions: Story = {
  // name 속성 제거
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '32px 80px', placeItems: 'center' }}>
      <div style={{ gridColumn: '1 / -1' }}>
        <Tooltip content="상단 툴팁입니다." position="top"><button>Top</button></Tooltip>
      </div>
      <Tooltip content="왼쪽 툴팁입니다." position="left"><button>Left</button></Tooltip>
      <div />
      <Tooltip content="오른쪽 툴팁입니다." position="right"><button>Right</button></Tooltip>
      <div style={{ gridColumn: '1 / -1' }}>
        <Tooltip content="하단 툴팁입니다." position="bottom"><button>Bottom</button></Tooltip>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  // name 속성 제거
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <Tooltip content="Black 타입 툴팁입니다." color="black"><button>Black</button></Tooltip>
      <Tooltip content="White 타입 툴팁입니다." color="white"><button>White</button></Tooltip>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const LongContent: Story = {
  // name 속성 제거
  args: {
    content: '이것은 콘텐츠가 매우 길어질 경우 어떻게 보이는지 테스트하기 위한 툴팁입니다. white-space: nowrap 스타일 때문에 한 줄로 길게 표시됩니다.',
    children: <button>긴 콘텐츠</button>,
  },
};

export const RichContent: Story = {
  // name 속성 제거
  args: {
    content: (
      <div style={{ textAlign: 'center' }}>
        <h4>안녕하세요!</h4>
        <p>툴팁 안에 <b>HTML</b>과 <i>컴포넌트</i>를<br /> 자유롭게 넣을 수 있습니다.</p>
        <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">여기를 클릭하세요</a>
      </div>
    ),
    children: <button>리치 콘텐츠</button>,
  },
  parameters: {
    notes: '`TooltipProps`의 `content` 타입을 `string`에서 `React.ReactNode`로 변경해야 합니다.',
  },
};

export const OnDisabledElement: Story = {
  // name 속성 제거
  render: () => (
    <Tooltip content="이 버튼은 현재 비활성화 상태입니다.">
      <span style={{ display: 'inline-block', cursor: 'not-allowed' }}>
        <button disabled style={{ pointerEvents: 'none' }}>비활성화 버튼</button>
      </span>
    </Tooltip>
  ),
};