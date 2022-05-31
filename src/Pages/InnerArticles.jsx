import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InArticles from "../Components/InArticles/InArticles";

function InnerArticles() {
  document.title = 'Logeeka science'
  return (
    <>
      <Header bgColor={'blue'}/>
      <InArticles/>
      <Footer />
    </>
  );
}

export default InnerArticles;
