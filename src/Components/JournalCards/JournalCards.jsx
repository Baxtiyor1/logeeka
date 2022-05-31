import React, { useState } from 'react'
import axios from 'axios';

//SASS
import './JournalCards.scss'

//IMAGES
import Download from "../../Assets/img/download.svg";

function JournalCards() {
  const [journalData, setJournalData] = useState()

  axios.get('https://logeekascience.com/api/journal')
    .then(res => setJournalData(res.data.data))

  return (
    <section className='jcards'>
      <div className="container">
        <div className="jcards__wrapper">
          <ul className="hjournal__list">
            {
              journalData && journalData.map((e, i) => {
                let year = e.date.split('T')[0]
                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                return (
                  <li key={i} className="hjournal__item">
                    <img className="hjournal__item-img" src={'https://logeekascience.com/api/' + e.image} alt="img"/>
                    <div className="hjournal__item-wrapper">
                      <h4 className="hjournal__item-title">{e.title}</h4>
                      <div className="hjournal__item-box">
                        <span className="hjournal__item-date">{year} {time}</span>
                        <a href={'https://logeekascience.com/api' + e.file} target="_blank" className="hjournal__item-btn" download={'AAAA'}>
                          <img src={Download} alt="downloader" width={20} height={20} />
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })
            }
            {
              !journalData && <h2 style={{ "margin": "150px 0","width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>No internet connection...</h2>
            }
          </ul>
          {
            journalData && <div className='confcards__btnbox hjournal__btnbox'><button className='confcards__btn hjournal__btn'>Show more</button></div>
          }
        </div>
      </div>
    </section>
  )
}

export default JournalCards