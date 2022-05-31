import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//SASS
import "./HomeJournal.scss";

// import images
import ArrowRight from "../../Assets/img/arrow-right.svg";
import Download from "../../Assets/img/download.svg";

function HomeJournal() {
  let [journalData, setjournalData] = useState()

  useEffect(() => {
    axios.get('https://logeekascience.com/api/journal?limit=8')
      .then(res => setjournalData(res.data.data))
  }, [])

  return (
    <section className="hjournal">
      <div className="container">
        <div className="hjournal__wrapper">
          {
            journalData && <Link className="hjournal__title" to={"/journal"}>Journal</Link>
          }
          <ul className="hjournal__list">
            {
              journalData && journalData.map((e, i) => {
                let year = e.date.split('T')[0]
                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                return (
                  <li key={i} className="hjournal__item">
                    <img className="hjournal__item-img" src={'https://logeekascience.com/api' + e.image} alt="journal" />
                    <div className="hjournal__item-wrapper">
                      <h4 className="hjournal__item-title">{e.title}</h4>
                      <div className="hjournal__item-box">
                        <span className="hjournal__item-date">{year} {time}</span>
                        <a target='_blank' rel="noreferrer" href={'https://logeekascience.com/api' + e.file} className="hjournal__item-btn" download>
                          <img src={Download} alt="downloader" width={20} height={20} />
                        </a>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
          {
            journalData && <Link className="more__link" to="/journal">More...{" "}
              <img className="more__link-img" src={ArrowRight} alt="ArroowRight" />
            </Link>
          }
          {
            !journalData && <h2 style={{"width": "1450px", "maxWidth": "100%", "textAlign": "center"}}>No internet connection...</h2>
          }
        </div>
      </div>
    </section>
  );
}

export default HomeJournal;
