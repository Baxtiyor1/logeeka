import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import InConference from "../Components/InConference/InConference";

function InnerConference() {
  document.title = 'Logeeka science'
  return (
    <>
      <Header bgColor={'blue'}/>
      <InConference/>
      <Footer />
    </>
  );
}

export default InnerConference;
