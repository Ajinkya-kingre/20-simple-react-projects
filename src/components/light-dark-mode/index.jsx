import React from "react";
import UseLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function LightDarkMode() {
  const [theme, setTheme] = UseLocalStorage("them", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  console.log(theme);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="ldm-container">
        <p>Hello World!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
