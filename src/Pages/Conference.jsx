import React from "react";
import Header from "../Components/Header/Header";
import ConfIntro from "../Components/ConfIntro/ConfIntro";
import ConfCards from "../Components/ConfCards/ConfCards";
import ConfSolution from "../Components/ConfSolution/ConfSolution";
import Footer from "../Components/Footer/Footer";

function Conference() {
  document.title = 'Logeeka Conference'
  return (
    <>
      <Header />
      <ConfIntro />
      <ConfCards />
      <ConfSolution />
      <Footer />
    </>
  );
}

export default Conference;
