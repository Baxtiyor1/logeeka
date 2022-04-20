import React from "react";
import "./HomeJournal.scss";
import { Link } from "react-router-dom";

// import images
import ArrowRight from "../../Assets/img/arrow-right.svg";
import Download from "../../Assets/img/download.svg";
import Img from "../../Assets/img/hjournal-item.png";

function HomeJournal() {
  const fakeJournals = [
    {
      id: 1,
      text: "aaa"
    },
    {
      id: 2,
      text: "bbb"
    },
    {
      id: 3,
      text: "ccc"
    },
    {
      id: 4,
      text: "ddd"
    },
    {
      id: 5,
      text: "rrr"
    },
    {
      id: 6,
      text: "eee"
    },
  ]
  return (
    <section className="hjournal">
      <div className="container">
        <div className="hjournal__wrapper">
          <Link className="hjournal__title" to={"/journal"}>
            Journal
          </Link>
          <ul className="hjournal__list">
            {
              fakeJournals && fakeJournals.map((e, i) => (
                <li key={i} className="hjournal__item">
                  <img className="hjournal__item-img" src={Img} alt="" />
                  <div className="hjournal__item-wrapper">
                    <h4 className="hjournal__item-title">{e.text}</h4>
                    <div className="hjournal__item-box">
                      <span className="hjournal__item-date">1-aprel 12:30</span>
                      <a href="#" className="hjournal__item-btn" download>
                        <img src={Download} alt="downloader" width={20} height={20} />
                      </a>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          <Link className="more__link" to="/journal">
            More...{" "}
            <img className="more__link-img" src={ArrowRight} alt="ArroowRight"/>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeJournal;