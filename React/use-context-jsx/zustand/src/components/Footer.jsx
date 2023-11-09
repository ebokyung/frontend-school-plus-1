import React from "react";
import {useThemeStore} from "../store";

export default function Footer({ isDark }) {
  const handleToggle= useThemeStore(state => state.toggleDarkMode);
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={handleToggle}>테마 변경</button>
    </footer>
  );
}
