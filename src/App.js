import React from "react";
import Routes from "./router/routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/Responsive.css";

const App = () => {
  return (
    // Fragments
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
