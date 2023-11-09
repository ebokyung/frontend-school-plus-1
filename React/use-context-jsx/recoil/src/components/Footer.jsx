import React from "react";
import { useSetRecoilState } from "recoil";
import { theme } from "../atoms";

export default function Footer({ isDark }) {
  const setTheme = useSetRecoilState(theme);
  return (
    <footer className={`footer ${isDark ? "dark" : "white"}`}>
      <button onClick={() => setTheme(prev => !prev)}>테마 변경</button>
    </footer>
  );
}
