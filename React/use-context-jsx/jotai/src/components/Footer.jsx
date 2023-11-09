import { useSetAtom } from "jotai";
import React from "react";
import { theme } from "../atoms";

export default function Footer({ isDark }) {
  const setTheme = useSetAtom(theme);
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setTheme(!isDark)}>테마 변경</button>
    </footer>
  );
}
