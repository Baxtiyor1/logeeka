import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomeArticle from "../Components/HomeArticle/HomeArticle";
import HomeIntro from "../Components/HomeIntro/HomeIntro";
import HomeJournal from "../Components/HomeJournal/HomeJournal";
import HomeConfirence from "../Components/HomeConfirence/HomeConfirence";
import HomePartner from "../Components/HomePartner/HomePartner";
import ConfSolution from "../Components/ConfSolution/ConfSolution";
import { useEffect } from "react";

function Home() {
  document.title = 'Logeeka science'

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Header/>
      <HomeIntro />
      <HomeJournal/>
      <HomeConfirence/>
      <HomeArticle/>
      <HomePartner/>
      <ConfSolution/>
      <Footer />
    </>
  );
}

export default Home;
