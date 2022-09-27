import ToggleIcon from "../assets/img/desktop/toggle-ligth.svg";
import SunIcon from "../assets/img/desktop/icon-sun.svg";
import MoonIcon from "../assets/img/desktop/icon-moon.svg";

const ThemeToggle = () => {
  return (
    <div className="toggle">
      <img src={SunIcon} alt="" />
      <img className="toggle-icon" src={ToggleIcon} alt="" />
      <img src={MoonIcon} alt="" />
    </div>
  );
};
const Header = () => {
  return (
    <header>
      <section>
        <h1>mlazos</h1>
        <ThemeToggle />
      </section>
    </header>
  );
};
export { Header };
