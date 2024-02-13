import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />
      {/* Random-Color-Generator */}
      <RandomColor/>
    </div>
  );
}

export default App;
