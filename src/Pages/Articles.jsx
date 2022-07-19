import React, { useState, useEffect } from "react";
import ArticleCards from "../Components/ArticleCards/ArticleCards";
import ArticleIntro from "../Components/ArticleIntro/ArticleIntro";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Articles() {
  document.title = 'Logeeka Articles'
  let [searchArticle, setSarchArticle] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <ArticleIntro setSearch={setSarchArticle} />
      <ArticleCards searchvalue={searchArticle} />
      <Footer />
    </>
  );
}

export default Articles;
