import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import JournalCards from "../Components/JournalCards/JournalCards";
import JournalIntro from "../Components/JournalIntro/JournalIntro";
import { useEffect } from "react";

function Journal() {
  document.title = 'Logeeka Journal';

  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <>
      <Header/>
      <JournalIntro/>
      <JournalCards/>
      <Footer />
    </>
  );
}

export default Journal;
