import React, { useState } from "react";
import { DropdownProps } from "./Dropdown.type";
import {
  DropdownUpArrowIcon,
  DropdownDownArrowIcon,
} from "../../icons/DropdownIcons";
import { typography } from "../../styles/foundation/typography/typography";

const Dropdown: React.FC<DropdownProps> = ({ placeholder, options, width }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTriggerHovered, setIsTriggerHovered] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div
      style={{
        width,
        border: `1px solid var(--color-gray-strong)`,
        borderRadius: "12px",
        backgroundColor: "var(--color-bw-white)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 21px",
          cursor: "pointer",
        }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsTriggerHovered(true)}
          onMouseLeave={() => setIsTriggerHovered(false)}
          style={{
            flex: 1,
            textAlign: "left",
            ...typography.Rg_16,
            fontWeight: selected ? 700 : isTriggerHovered ? 400 : 300,
            color: selected
              ? "var(--color-bw-black)"
              : "var(--color-gray-medium)",
            transition: "font-weight 0.2s ease",
          }}
        >
          {selected || placeholder}
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            marginLeft: "8px",
            cursor: "pointer",
          }}
        >
          {isOpen ? <DropdownUpArrowIcon /> : <DropdownDownArrowIcon />}
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            height: "2px",
            backgroundColor: "var(--color-gray-light)",
            margin: "0 21px",
          }}
        />
      )}
      <div
        style={{
          maxHeight: isOpen
            ? options.length > 5
              ? `${5 * 50}px`
              : `${options.length * 50}px`
            : "0",
          overflowY: options.length > 5 ? "auto" : "hidden",
          overflowX: "hidden",
          transition: "max-height 0.2s ease",
        }}
      >
        {options.map((option, index) => (
          <React.Fragment key={index}>
            {index !== 0 && (
              <div
                style={{
                  height: "1px",
                  backgroundColor: "var(--color-gray-light)",
                  margin: "0 21px",
                }}
              />
            )}
            <div
              onClick={() => handleSelect(option)}
              onMouseEnter={(e) => {
                e.currentTarget.style.fontWeight = "500";
                e.currentTarget.style.color = "var(--color-gray-strong)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.fontWeight = "400";
                e.currentTarget.style.color = "var(--color-bw-black)";
              }}
              style={{
                ...typography.Rg_16,
                color: "var(--color-bw-black)",
                padding: "12px 21px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                transition: "font-weight 0.2s ease",
              }}
            >
              {option}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
