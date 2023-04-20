import React from "react";
import Header from './Home/Header';
import Footer from './Home/Footer';
import Info from "./Shop/Info";
import Ware from "./Shop/Ware";

export default function Shop() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Info />
        <Ware />
      </main>
      <Footer />
    </React.Fragment>
  )
}