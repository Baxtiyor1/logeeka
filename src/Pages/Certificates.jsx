import React, { useState } from "react";
import Header from "../Components/Header/Header";
import CertificateIntro from "../Components/CertificateIntro/CertificateIntro";
import CertCards from "../Components/CertCards/CertCards";
import Footer from "../Components/Footer/Footer";

function Certificates() {
  document.title = 'Logeeka Certificate'
  let [certSearch, setCertSearch] = useState(false)
  return (
    <>
      <Header />
      <CertificateIntro setCert={setCertSearch}/>
      <CertCards searchValue={certSearch}/>
      <Footer />
    </>
  );
}

export default Certificates;
