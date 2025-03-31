import "./App.css";
import FloatButton from "./libs/floatbutton/FloatButton";

function App() {
  return (
    <div>
      <FloatButton
        icon="❓"
        position="center"
        size="large"
        onClick={() => alert("Help clicked!")}
      />
    </div>
  );
}

export default App;
