import React from "react";
import "./App.css";
import Page from "./components/Page";
import { useThemeStore } from "./store";

function App() {
  const {isDarkMode}= useThemeStore();
  return <Page isDark={isDarkMode} />;
}

export default App;
