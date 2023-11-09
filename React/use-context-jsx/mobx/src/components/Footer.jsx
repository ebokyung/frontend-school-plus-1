import React from "react";
import { themeStore } from "../obserable";

export default function Footer({ isDark }) {
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => {
        themeStore.toggleTheme();
      }}>테마 변경</button>
    </footer>
  );
}
