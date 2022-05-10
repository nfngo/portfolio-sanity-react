import React from "react";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, SocialMedia, NavigationDots } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <NavigationDots />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
