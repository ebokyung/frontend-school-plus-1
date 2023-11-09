import React from "react";
import "./App.css";
import Page from "./components/Page";
import { theme } from "./atoms";
import { useRecoilValue } from "recoil";

function App() {
  const isDark= useRecoilValue(theme);
  return <Page isDark={isDark} />;
}

export default App;
