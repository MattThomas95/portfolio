import "./App.css";
import "./index.css";
import Scene from "./components/Scene.jsx";
import Rockets from "./components/rockets.jsx";

function App() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden">
        <div className="w-screen h-screen">
          <Scene />
        </div>
          <Rockets/>
      </div>
    </>
  );
}

export default App;
