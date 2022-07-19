import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InArticles from "../Components/InArticles/InArticles";
import { useEffect } from "react";

function InnerArticles() {
  document.title = 'Logeeka science';

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <>
      <Header bgColor={'blue'}/>
      <InArticles/>
      <Footer />
    </>
  );
}

export default InnerArticles;
