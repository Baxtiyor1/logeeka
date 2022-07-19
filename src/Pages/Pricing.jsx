import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PricingMain from "../Components/PricingMain/PricingMain";
import { useEffect } from "react";

function Pricing() {
  document.title = 'Logeeka price';

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  return (
    <>
      <Header bgColor={'blue'} />
      <PricingMain />
      <Footer />
    </>
  );
}

export default Pricing;
