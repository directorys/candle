import React from "react";
import Header from "./Home/Header";
import About from './Home/About';
import Describe from "./Home/Describe";
import Sort from "./Home/Sort";
import Product from "./Home/Product";
import Footer from "./Home/Footer";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <About />
        <Describe />
        <Sort />
        <Product />
      </main>
      <Footer />
    </React.Fragment>
  )
}