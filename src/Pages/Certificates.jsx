import React from "react";
import Header from "../Components/Header/Header";
import CertificateIntro from "../Components/CertificateIntro/CertificateIntro";
import CertCards from "../Components/CertCards/CertCards";
import Footer from "../Components/Footer/Footer";

function Certificates() {
  return (
    <>
      <Header />
      <CertificateIntro />
      <CertCards />
      <Footer />
    </>
  );
}

export default Certificates;
