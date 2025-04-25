import styles from "./Divider.module.css";
import { DividerProps } from "./Divider.type";
import { theme } from "../../styles/theme/theme";

const Divider = ({ width = "100%", thickness = 1, style }: DividerProps) => {
  const dividerStyles = {
    width,
    borderTop: `${thickness}px solid ${theme.semantic.color.gray.light}`,
    margin: "0 auto",
    ...style,
  };

  return <hr className={styles.divider} style={dividerStyles} />;
};

export default Divider;
