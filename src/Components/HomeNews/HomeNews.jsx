import React from "react";
import "./HomeNews.scss";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Calendar from '../../Assets/img/calendar.svg'
import Eye from '../../Assets/img/eye.svg'
import Clock from '../../Assets/img/clock.svg'
import arrow_icon from '../../Assets/img/chevron-right.svg'

function HomeNews() {
  return (
    <section className="hnews">
      <div className="container">
        <div className="hnwes__wrapper">
          <div className="hnews__box">
            <Link className="hnews__title" to={"/news"}>News</Link>
            <div className="hnews__subbox">
              <button className="hnews__btn hnews__btn--left">
                <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
              </button>
              <button className="hnews__btn hnews__btn--right">
                <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
              </button>
            </div>
          </div>
          <Swiper className="hnews__swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={24}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              626: {
                slidesPerView: 2,
                spaceBetween: 10
              },
              1260: {
                slidesPerView: 3,
                spaceBetween: 40
              }
            }}
            navigation={{
              nextEl: '.hnews__btn--right',
              prevEl: '.hnews__btn--left'
            }}
          >
            <SwiperSlide className="hnews__slide">
              <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
              <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
              <div className="hnews__slide-box">
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
              <h4 className="hnews__slide-title">Preprint server removes ‘inflammatory’ papers in superconductor controversy</h4>
              <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
              <div className="hnews__slide-box">
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
              <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
              <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
              <div className="hnews__slide-box">
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="hnews__slide">
              <h4 className="hnews__slide-title">Ukrainian researchers flee trauma and terror of war</h4>
              <p className="hnews__slide-text">Refugees find aid and jobs, but many remain to fight Russian invaders</p>
              <div className="hnews__slide-box">
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Calendar} alt="" /> 06/02/2022</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Clock} alt="" /> 11:15</span>
                <span className="hnews__slide-span"> <img className="hnews__slide-icon" src={Eye} alt="" /> 222</span>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomeNews;
