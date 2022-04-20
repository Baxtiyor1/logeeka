import React from "react";
import Header from "../Components/Header/Header";
import AboutStaffIntro from "../Components/AboutStaffIntro/AboutStaffIntro";
import Staffs from "../Components/AboutStaff/AboutStaff";
import Footer from '../Components/Footer/Footer'

function AboutStaff() {
  return (
    <>
      <Header />
      <AboutStaffIntro />
      <Staffs />
      <Footer />
    </>
  );
}

export default AboutStaff;
