import React from "react";
import "./App.css";
import Page from "./components/Page";
import { theme } from "./atoms";
import { useAtomValue } from "jotai";

function App() {
  const isDark = useAtomValue(theme);
  return <Page isDark={isDark} />;
}

export default App;
