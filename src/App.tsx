import "./App.css";
import { theme } from "./styles/theme/theme";

function App() {
  return (
    <div
      style={{
        backgroundColor: theme.semantic.color.light.lightAlternative,
        width: "100px",
        height: "100px",
      }}
    >
      시멘틱 컬러가 적용된 박스입니다.
    </div>
  );
}

export default App;
