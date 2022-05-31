import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PricingMain from "../Components/PricingMain/PricingMain";

function Pricing() {
  document.title = 'Logeeka price'
  return (
    <>
      <Header bgColor={'blue'}/>
      <PricingMain/>
      <Footer />
    </>
  );
}

export default Pricing;
