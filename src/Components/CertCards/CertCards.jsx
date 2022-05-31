import React, { useEffect, useState } from "react";
import axios from "axios";

//sass
import './CertCards.scss'

function CertCards({searchValue}) {
  let [certifData, setCertifData] = useState()

  useEffect(()=> {
    if(searchValue){
      axios.get(`https://logeekascience.com/api/certificate?search=${searchValue}`)
        .then(res => setCertifData(res.data.data))
    }
  }, [searchValue])

  useEffect(() => {
    axios.get('https://logeekascience.com/api/certificate?limit=6')
      .then(res => setCertifData(res.data.data))
  }, [!searchValue])

  return (
    <section className="certcards">
      <div className="container">
        <div className="certcards__wrapper">
          <ul className="certcards__list">
            {
              certifData && certifData.map((e, i) => (
                <li key={i} className="certcards__item">
                  <img className="certcards__img" src={'https://logeekascience.com/api' + e.image_url} alt="image" />
                  <h4 className="certcards__title">CCID : {e.ccid}</h4>
                </li>
              ))
            }
            {
              !certifData && <h2 style={{ "width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>This certificate is not found or No internet connection...</h2>
            }
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CertCards;
