import React, { useState } from "react";
import Header from "../Components/Header/Header";
import CertificateIntro from "../Components/CertificateIntro/CertificateIntro";
import CertCards from "../Components/CertCards/CertCards";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

function Certificates() {
  document.title = 'Logeeka Certificate'
  let [certSearch, setCertSearch] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
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
