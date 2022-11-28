import { useState, useEffect } from "react";
import "./assets/styles/index.scss";
import { Filter, SmallFilter } from "./components/Filter";
import { Header } from "./components/Header";
import { ProjectList } from "./components/projects";
import { Context } from "./context";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Project } from "./types";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  const matches = useMediaQuery("(min-width: 768px)");
  const [projects, setProjects] = useState<Array<Project>>();
  const projectRef = collection(db, "projects");
  const [theme, setTheme] = useState("light");


  useEffect(() => {
    const getProject = async () => {
      const data = await getDocs(projectRef);
      // console.log(data);
      setProjects(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Project))
      );
    };

    getProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <div className={`App theme-${theme}`}>
        <Context.Provider value={{ theme, setTheme }}>
          <Header />
          {matches ? <Filter /> : <SmallFilter />}
          <ProjectList projects={projects} />
        </Context.Provider>
      </div>
    </Provider>
  );
}

export default App;
