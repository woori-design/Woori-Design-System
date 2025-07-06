import { useEffect, RefObject } from "react";

/**
 * 특정 요소 바깥을 클릭했을 때 콜백을 실행해주는 커스텀 훅
 */
export const useClickOutside = (refs: RefObject<HTMLElement>[], onClickOutside: () => void) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (refs.every((ref) => ref.current && !ref.current.contains(event.target as Node))) {
        onClickOutside();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [refs, onClickOutside]);
};
