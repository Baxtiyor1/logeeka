import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InConference from "../Components/InConference/InConference";
import { useEffect } from "react";

function InnerConference() {
  document.title = 'Logeeka science';
  useEffect(() => {
    window.scrollTo(0, 0)
}, []);
  return (
    <>
      <Header bgColor={'blue'}/>
      <InConference/>
      <Footer />
    </>
  );
}

export default InnerConference;
