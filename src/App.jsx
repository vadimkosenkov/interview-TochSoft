import { useState } from "react";
import "./App.scss";
import Counter from "./components/Counter/Counter";

function App() {
  const [theme, setTheme] = useState();
  return (
    <div className="App" theme={theme}>
      <header className="header" theme={theme}>
        <h1>Тестовое задание TouchSoft</h1>
        <h2>React Block</h2>
      </header>
      <Counter setTheme={setTheme} />
    </div>
  );
}

export default App;
