import React from "react";
import Header from "../Components/Header/Header";
import ConfIntro from "../Components/ConfIntro/ConfIntro";
import ConfCards from "../Components/ConfCards/ConfCards";
import ConfSolution from "../Components/ConfSolution/ConfSolution";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

function Conference() {
  document.title = 'Logeeka Conference'

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
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
