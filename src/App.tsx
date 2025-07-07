import "./App.css";
import Tooltip from "./libs/tooltip/Tooltip";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <Tooltip content="왼쪽 툴팁" position="left">
        <button style={{ minWidth: 100, minHeight: 48, fontSize: 18, borderRadius: 8 }}>
          Left
        </button>
      </Tooltip>
      <Tooltip content="오른쪽 툴팁" position="right">
        <button style={{ minWidth: 100, minHeight: 48, fontSize: 18, borderRadius: 8 }}>
          Right
        </button>
      </Tooltip>
      <Tooltip content="상단 툴팁" position="top">
        <button style={{ minWidth: 100, minHeight: 48, fontSize: 18, borderRadius: 8 }}>
          Top
        </button>
      </Tooltip>
      <Tooltip content="하단 툴팁" position="bottom">
        <button style={{ minWidth: 100, minHeight: 48, fontSize: 18, borderRadius: 8 }}>
          Bottom
        </button>
      </Tooltip>
    </div>
  );
}

export default App;
