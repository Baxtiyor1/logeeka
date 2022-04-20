import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomeArticle from "../Components/HomeArticle/HomeArticle";
import HomeIntro from "../Components/HomeIntro/HomeIntro";
import HomeJournal from "../Components/HomeJournal/HomeJournal";
import HomeNews from "../Components/HomeNews/HomeNews";

function Home() {
  return (
    <>
      <Header/>
      <HomeIntro />
      <HomeArticle/>
      <HomeJournal/>
      <HomeNews/>
      <Footer />
    </>
  );
}

export default Home;
