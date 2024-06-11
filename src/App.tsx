import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { CORE_CONCEPTS } from "./../data";
import Examples from "./components/Examples/Examples";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Slider concepts={CORE_CONCEPTS} />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
