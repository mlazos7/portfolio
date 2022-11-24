// import ToggleIconLight from "../assets/img/desktop/toggle-light.svg";
// import ToggleIconDark from "../assets/img/desktop/toggle-dark.svg";
// import SunIcon from "../assets/img/desktop/icon-sun.svg";
// import MoonIcon from "../assets/img/desktop/icon-moon.svg";
// import { Context } from "../context";
// import { useContext } from "react";

// const ThemeToggle = () => {
//   const { theme, setTheme } = useContext(Context);

//   const toogleOnClick = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   const toggleIcon : string = theme === 'light' ? ToggleIconLight : ToggleIconDark;

//   return (
//     <div className="toggle">
//       <img src={SunIcon} alt="" />
//       <img
//         className="toggle-icon pointer"
//         onClick={toogleOnClick}
//         src={toggleIcon}
//         alt=""
//       />
//       <img src={MoonIcon} alt="" />
//     </div>
//   );
// };
const Header = () => {

  return (
    <header>
      <section>
        <h1>mlazos projects</h1>
        {/* <ThemeToggle /> */}
      </section>
    </header>
  );
};
export { Header };
