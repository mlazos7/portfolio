import { useState,useContext, useEffect } from "react";
import "./assets/styles/index.scss";
import { Filter, SmallFilter } from "./components/Filter";
import { Header } from "./components/Header";
import {ProjectList} from "./components/projects";
import { Context } from "./context";
import { useMediaQuery } from "./hooks/useMediaQuery";


function App() {
  const matches = useMediaQuery("(min-width: 768px)");

  const [theme,setTheme] = useState('light');

  return (
    <div className={`App theme-${theme}`}>
      <Context.Provider value={{theme,setTheme}}>
        <Header />
        {matches ? <Filter /> : <SmallFilter />}
        <ProjectList />
      </Context.Provider>
    </div>
  );
}

export default App;
