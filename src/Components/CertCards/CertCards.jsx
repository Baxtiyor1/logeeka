import React, { useEffect, useState } from "react";
import axios from "axios";

//sass
import './CertCards.scss'

function CertCards({ searchValue }) {
  let [certifData, setCertifData] = useState()

  useEffect(() => {
    if (searchValue) {
      axios.get(`https://logeekascience.com/api/certificate?search=${searchValue}&limit=1000`)
        .then(res => setCertifData(res.data.data))
    }
  }, [searchValue])

  useEffect(() => {
    axios.get('https://logeekascience.com/api/certificate?limit=9')
      .then(res => setCertifData(res.data.data))
  }, [])
  
  return (
    <section className="certcards">
      <div className="container">
        <div className="certcards__wrapper">
          <ul className="certcards__list">
            {
              certifData && certifData.map((e, i) => (
                <li key={i} className="certcards__item">
                  <a href={'https://logeekascience.com/api' + e.image_url} target={"_blank"} download>
                    <img className="certcards__img" src={'https://logeekascience.com/api' + e.image_url} alt="certificate" />
                    <h4 className="certcards__title">CCID : {e.ccid}</h4>
                  </a>
                </li>
              ))
            }
            {
              !certifData && <h2 style={{ "width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>No internet connection...</h2>
            }
            {
              certifData && certifData.length < 1 && <h2 style={{ "width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>Certificate is not found</h2>
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CertCards;
