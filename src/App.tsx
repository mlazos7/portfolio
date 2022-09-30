import { useState,useContext } from "react";
import "./assets/styles/index.scss";
import Content from "./components/Content";
import { Filter, SmallFilter } from "./components/Filter";
import { Header } from "./components/Header";
import { Context } from "./context";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const matches = useMediaQuery("(min-width: 768px)");

  const [theme,setTheme] = useState('light');

  return (
    <div className="App">
      <Context.Provider value={{theme,setTheme}}>
        <Header />
        {matches ? <Filter /> : <SmallFilter />}
        <Content />
      </Context.Provider>
    </div>
  );
}

export default App;
