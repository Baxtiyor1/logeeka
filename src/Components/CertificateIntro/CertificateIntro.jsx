import React from "react";

import "./CertificateIntro.scss";
import Lupa from '../../Assets/img/searchArticle.svg';

function CertificateIntro(props) {

  function searchCertificate(e){
    e.preventDefault()
    let { ccid } = e.target.elements
    props.setCert(ccid.value)
  }
  return (
    <section className="certintro">
      <div className="container">
        <div className="certintro__wrapper">
          <h1 className="certintro__title">Certificates</h1>
          <form onSubmit={searchCertificate} className="artintro__form">
            <div className="artintro__box">
              <img className="artintro__icon" src={Lupa} alt="lupa" />
              <input name="ccid" className="artintro__input" type="text" placeholder="Enter CCID or JCID number" />
            </div>
            <button className="artintro__btn">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CertificateIntro;
