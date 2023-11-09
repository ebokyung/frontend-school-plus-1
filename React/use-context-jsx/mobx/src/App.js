import React from "react";
import "./App.css";
import Page from "./components/Page";
import { themeStore } from "./obserable";
import { useObserver } from 'mobx-react';

const App = ()=> {
  return useObserver(() => <Page isDark={themeStore.isDarkMode} />);
};

export default App;
