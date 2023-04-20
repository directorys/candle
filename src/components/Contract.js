import React from "react";
import Header from './Home/Header';
import Footer from "./Home/Footer";
import Capitals from "./Contract/Capitals";
import Topic from "./Contract/Topic";
import Work from "./Contract/Work";
import Contact from "./Contract/Contact";

export default function Contract() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Capitals />
        <Topic />
        <Work />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  )
}