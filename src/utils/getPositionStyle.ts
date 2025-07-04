import { FloatPosition, Offset } from "src/libs/floatbutton/FloatButton.type";

/**
 * 플로팅 버튼의 위치를 계산해주는 유틸 함수
 */
export const getPositionStyle = (position: FloatPosition, offset: Offset): React.CSSProperties => {
  const style: React.CSSProperties = {
    position: "fixed",
    zIndex: 999,
  };

  switch (position) {
    case "right-top":
      style.top = `${offset.y}px`;
      style.right = `${offset.x}px`;
      break;
    case "left-top":
      style.top = `${offset.y}px`;
      style.left = `${offset.x}px`;
      break;
    case "right-bottom":
      style.bottom = `${offset.y}px`;
      style.right = `${offset.x}px`;
      break;
    case "left-bottom":
      style.bottom = `${offset.y}px`;
      style.left = `${offset.x}px`;
      break;
  }

  return style;
};
