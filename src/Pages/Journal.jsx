import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import JournalCards from "../Components/JournalCards/JournalCards";
import JournalIntro from "../Components/JournalIntro/JournalIntro";

function Journal() {
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
