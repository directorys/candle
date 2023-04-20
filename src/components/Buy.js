import React from "react";
import Header from './Home/Header';
import Footer from "./Home/Footer";
import Elect from './Buy/Elect';
import Service from "./Buy/Service";
import Forms from "./Buy/Forms";

export default function Buy() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Elect />
        <Service />
        <Forms />
      </main>
      <Footer />
    </React.Fragment>
  )
}