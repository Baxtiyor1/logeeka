import React from "react";
import Header from "../Components/Header/Header";
import ContactsMain from "../Components/ContactsMain/ContactsMain";
import Footer from "../Components/Footer/Footer";

function Contacts() {
  document.title = 'Logeeka Contact'
  return (
    <>
      <Header bgColor={'blue'}/>
      <ContactsMain />
      <Footer />
    </>
  );
}

export default Contacts;
