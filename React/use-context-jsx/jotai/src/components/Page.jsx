import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
export default function Page({ isDark }) {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
