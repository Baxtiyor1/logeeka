import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import JournalCards from "../Components/JournalCards/JournalCards";
import JournalIntro from "../Components/JournalIntro/JournalIntro";

function Journal() {
  document.title = 'Logeeka Journal'
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
