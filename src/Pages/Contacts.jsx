import React from "react";
import Header from "../Components/Header/Header";
import ContactIntro from "../Components/ContactIntro/ContactIntro";
import ContactsMain from "../Components/ContactsMain/ContactsMain";
import Footer from "../Components/Footer/Footer";

function Contacts() {
  return (
    <>
      <Header />
      <ContactIntro />
      <ContactsMain />
      <Footer />
    </>
  );
}

export default Contacts;
