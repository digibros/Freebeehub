import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Categories from "../components/home/Categories";
import Features from "../components/home/Features";
import Main from "../components/home/Main";
import Products from "../components/home/Products";
import Suggestions from "../components/home/Suggestions";
import "../css/home.css";
function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Categories />
      <Suggestions />
      {/* <Features /> */}
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
