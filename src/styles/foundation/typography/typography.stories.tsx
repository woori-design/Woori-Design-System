import { useState } from "react";
import { weightNames, getTypographyClassName, typography } from "./typography";
import { FontWeight, TypographyToken } from "./typography.type";

export const TypographyPreview = () => {
  const [text, setText] = useState("우리디자인");
  const [weightFilter, setWeightFilter] = useState<"all" | FontWeight>("all");

  const weights = ["all", "Rg", "Md", "SB"] as const;
  const sizes = Array.from({ length: 10 }, (_, i) => i + 1);

  const allClassNames = weights
    .filter((weight) => weight !== "all")
    .flatMap((weight) =>
      sizes.map((size) => {
        const token = `${weight as FontWeight}_t${size}` as TypographyToken;
        return {
          weight: weight as FontWeight,
          size,
          token,
          className: getTypographyClassName(token),
          style: typography[token],
        };
      })
    );

  const filteredClassNames =
    weightFilter === "all"
      ? allClassNames
      : allClassNames.filter((item) => item.weight === weightFilter);

  const groupedByWeight = filteredClassNames.reduce((acc, item) => {
    if (!acc[item.weight]) acc[item.weight] = [];
    acc[item.weight].push(item);
    return acc;
  }, {} as Record<FontWeight, typeof allClassNames>);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          padding: "24px",
          backgroundColor: "#f8f9fa",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <input
          placeholder="텍스트를 입력해주세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            all: "unset",
            border: "1px solid #d2d0d2",
            borderRadius: "9999px",
            padding: "16px 20px",
            flexGrow: 1,
            boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
          }}
        />
        <div style={{ display: "flex", gap: "8px" }}>
          {weights.map((weight) => (
            <button
              key={weight}
              onClick={() => setWeightFilter(weight as "all" | FontWeight)}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                border: "1px solid #d2d0d2",
                background: weightFilter === weight ? "#4f46e5" : "white",
                color: weightFilter === weight ? "white" : "#333",
                fontWeight: 500,
              }}
            >
              {weight === "all" ? "전체" : weight}
            </button>
          ))}
        </div>
      </div>

      {Object.entries(groupedByWeight).map(([weight, items]) => (
        <div key={weight} style={{ marginBottom: "32px" }}>
          <h3
            style={{
              marginBottom: "16px",
              padding: "8px 16px",
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            {weightNames[weight as FontWeight]}
          </h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {items
              .sort((a, b) => a.size - b.size)
              .map((item) => (
                <div
                  key={item.className}
                  style={{
                    padding: "16px 24px",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: item.style.fontFamily,
                      fontWeight: item.style.fontWeight,
                      fontSize: item.style.fontSize,
                      lineHeight: item.style.lineHeight,
                      letterSpacing: item.style.letterSpacing,
                    }}
                  >
                    {text}
                  </div>
                  <code
                    style={{
                      fontSize: "12px",
                      color: "#666",
                      padding: "4px 8px",
                      backgroundColor: "#f5f5f5",
                      borderRadius: "4px",
                    }}
                  >
                    {item.className}
                  </code>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: "Foundation/Typography",
  component: TypographyPreview,
};
