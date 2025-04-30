import { Children, isValidElement, ReactElement } from "react";
import { MenuItemProps } from "../libs/floatbutton/MenuItem.type";

export const useFloatButtonMenu = (children: React.ReactNode) => {
  return Children.toArray(children).filter(
    (child): child is ReactElement<MenuItemProps> =>
      isValidElement(child) && (child.type as any)?.displayName === "MenuItem"
  );
};
