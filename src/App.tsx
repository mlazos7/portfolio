import "./assets/styles/index.scss";
import Content from "./components/Content";
import { Filter, SmallFilter } from "./components/Filter";
import { Header } from "./components/Header";
import { useMediaQuery } from "./hooks/useMediaQuery";

function App() {
  const matches = useMediaQuery("(min-width: 768px)");

  return (
    <div className="App">
      <Header />
      {matches ? <Filter /> : <SmallFilter />}
      <Content />
    </div>
  );
}

export default App;
