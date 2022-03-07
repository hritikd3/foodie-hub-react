import React from "react";
// import "./style.scss"
import Home from "./Components/Home";
import About from "./Components/About";
import Category from "./Components/Category";
import Popular from "./Components/Popular";
import Banner from "./Components/Banner";
import Menu from "./Components/Menu";
import Blogs from "./Components/Blogs";
import Order from "./Components/Order";
import Footer from "./Components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Home />
      <About />
      <Category />
      <Popular />
      <Banner />
      <Menu />
      <Order />
      <Blogs />
      <Footer />
    </div>
  );
}
