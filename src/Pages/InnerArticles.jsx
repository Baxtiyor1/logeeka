import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InArticles from "../Components/InArticles/InArticles";

function InnerArticles() {
  return (
    <>
      <Header bgColor={'blue'}/>
      <InArticles/>
      <Footer />
    </>
  );
}

export default InnerArticles;
