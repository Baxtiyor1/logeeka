import React, { useEffect } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import "./InArticles.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Download from '../../Assets/img/download-white.svg'
import Share from "../../Assets/img/share-2.svg";

function InArticles() {
  let { id } = useParams()

  let [inArticleData, setInArticleData] = useState()
  let [articleData, setArticleData] = useState()

  useEffect(() => {
    axios.get(`https://logeekascience.com/api/posts/allArticle?id=${id}`)
      .then(res => setInArticleData(res.data.data))
  }, [id])

  useEffect(() => {
    axios.get('https://logeekascience.com/api/posts/allArticle')
      .then(res => setArticleData(res.data.data))
  }, [id])

  return (
    <section className="inarticles">
      <div className="container">
        <div className="pricing__navlink">
          <NavLink className={"pricing__navlink"} to={"/"}>
            Home
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink className={"pricing__navlink"} to={"/news"}>
            Articles
          </NavLink>
          <span className={"pricing__navlink"}> | </span>
          <NavLink
            className={"pricing__navlink pricing__navlink--active"}
            to={"/#"}
          >
            Ways to strengthten
          </NavLink>
        </div>
        {
          inArticleData && inArticleData.map((e, i) => (
            <div key={i} className="news__wrapper">
              <div className="news__left">
                <h2 className="news__left-title">{e.full_name}</h2>
                <p className="news__left-text">{e.profession}</p>
              </div>
              <div className="news__right inarticles__right">
                <h1 className="news__right-title">{e.title}</h1>
                <p className="news__right-text">
                  <span className="news__right-text--bold">keyword : </span>{e.keyword}</p>
                <h4 className="inarticles__subtitle">Anastasiya</h4>
                <p className="news__right-text">{e.annastatsiya}</p>
                <div className="inarticles__box">
                  <button className="news__btn">
                    <img src={Share} alt="share" />
                  </button>
                  <div className="inarticles__subbox">
                    <p className="inarticles__subbox-text">Download PDF</p>
                    <a href={'https://logeekascience.com/api' + e.file} className="news__btn" download>
                      <img src={Download} alt="download" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        <div className="hnwes__wrapper">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={2}
            navigation
          >
            {
              articleData && articleData.map((e, i) => {
                let year = e.created_at.split('T')[0]
                return (
                  <SwiperSlide key={i} className="harticle__item">
                    <Link to={'/articles/' + e.article_id}>
                      <h4 className="harticle__item-title">{e.title}</h4>
                      <p className="harticle__item-name">{e.full_name}</p>
                      <div className="harticle__item-box">
                        <span className="harticle__item-subtext">CARREERS EDITORIAL</span>
                        <span className="harticle__item-line">|</span>
                        <span className="harticle__item-date">{year}</span>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default InArticles;
