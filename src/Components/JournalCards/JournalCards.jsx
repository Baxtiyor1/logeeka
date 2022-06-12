import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

//SASS
import './JournalCards.scss'

//IMAGES
import Download from "../../Assets/img/download.svg";

function JournalCards() {
  const [journalData, setJournalData] = useState()
  let [pageLimit, setPageLimit] = useState(1)
  let show_btn = useRef()

  useEffect(() => {
    axios.get('https://logeekascience.com/api/journal?limit=8')
      .then(res => {
        setJournalData(res.data.data);
        setPageLimit(Math.ceil(res.data.count_selected / 8));
      })
  }, [])

  function nextPage(e) {
    e.preventDefault()
    let pageCount = e.target.dataset.page
    if (Number(pageLimit) <= Number(pageCount) - 1) {
      show_btn.current && show_btn.current.classList.add('jcards__btn--close')
    } else {
      show_btn.current && show_btn.current.classList.remove('jcards__btn--close')

      if (Number(pageLimit) === Number(pageCount)) {
        show_btn.current && show_btn.current.classList.add('jcards__btn--close')
      }

      axios.get(`https://logeekascience.com/api/journal?page=${pageCount}&limit=8`)
        .then(res => {
          setJournalData([...journalData, ...res.data.data]);
          setPageLimit(Math.ceil(res.data.count_selected / 8));
        })
    }

    e.target.dataset.page = Number(pageCount) + 1
  }

  return (
    <section className='jcards'>
      <div className="container">
        <div className="jcards__wrapper">
          <ul className="jcards__list">
            {
              journalData && journalData.map((e, i) => {
                let year = e.date.split('T')[0]
                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                return (
                  <li key={i} className="jcards__item">
                    <img className="hjournal__item-img" src={'https://logeekascience.com/api/' + e.image} alt="img" />
                    <div className="hjournal__item-wrapper">
                      <h4 className="hjournal__item-title">{e.title}</h4>
                      <div className="hjournal__item-box">
                        <span className="hjournal__item-date">{year} {time}</span>
                        <a href={'https://logeekascience.com/api' + e.file} target="_blank" rel="noreferrer" className="hjournal__item-btn" download={'AAAA'}>
                          <img src={Download} alt="downloader" width={20} height={20} />
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })
            }
            {
              !journalData && <h2 style={{ "margin": "150px 0", "width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>No internet connection...</h2>
            }
          </ul>
          {
            journalData && <div ref={show_btn} className='confcards__btnbox hjournal__btnbox jcard__btn'>
              <button onClick={nextPage} data-page="2" className='confcards__btn hjournal__btn'>Show more</button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default JournalCards