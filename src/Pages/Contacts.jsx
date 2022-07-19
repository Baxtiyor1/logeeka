import React from "react";
import Header from "../Components/Header/Header";
import ContactsMain from "../Components/ContactsMain/ContactsMain";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

function Contacts() {
  document.title = 'Logeeka Contact'

  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Header bgColor={'blue'}/>
      <ContactsMain />
      <Footer />
    </>
  );
}

export default Contacts;
