import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { typography } from "./typography";
import { TypographyToken } from "./typography.type";

const meta: Meta = {
  title: "Foundation/Typos",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const TypoStory: StoryObj = {
  render: () => <TypoTestStory />,
};

const TypoTestStory = () => {
  const [previewTxt, setPreviewTxt] = useState("가나다라마바사");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreviewTxt(e.target.value);
  };

  const typoEntries = Object.entries(typography) as [TypographyToken, React.CSSProperties][];

  return (
    <div style={{ padding: "2rem", width: "100%", maxWidth: "800px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "1rem" }}>Typography System</h1>
      <input
        type="text"
        value={previewTxt}
        onChange={handleInput}
        placeholder="예시 텍스트 입력"
        style={{
          marginBottom: "2rem",
          padding: "0.5rem",
          fontSize: "16px",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "160px minmax(520px, 1fr) 60px",
          rowGap: "1.25rem",
          columnGap: "1rem",
        }}
      >
        {typoEntries.map(([token, style]) => (
          <React.Fragment key={token}>
            <div style={{ fontSize: "14px", color: "#666" }}>{token}</div>
            <div style={style}>{previewTxt}</div>
            <div style={{ fontSize: "14px", color: "#aaa" }}>{style.fontSize}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
