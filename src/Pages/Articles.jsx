import React from "react";
import ArticleCards from "../Components/ArticleCards/ArticleCards";
import ArticleIntro from "../Components/ArticleIntro/ArticleIntro";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Articles() {
  return (
    <>
      <Header />
      <ArticleIntro />
      <ArticleCards />
      <Footer />
    </>
  );
}

export default Articles;
