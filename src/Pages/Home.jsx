import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomeArticle from "../Components/HomeArticle/HomeArticle";
import HomeIntro from "../Components/HomeIntro/HomeIntro";
import HomeJournal from "../Components/HomeJournal/HomeJournal";
import HomeConfirence from "../Components/HomeConfirence/HomeConfirence";

function Home() {
  document.title = 'Logeeka science'
  return (
    <>
      <Header/>
      <HomeIntro />
      <HomeArticle/>
      <HomeJournal/>
      <HomeConfirence/>
      <Footer />
    </>
  );
}

export default Home;
