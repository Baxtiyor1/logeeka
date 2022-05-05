import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

//SASS
import './ArticleCards.scss';

function ArticleCards() {
  return (
    <section className='artcards'>
      <div className="container">
        <div className="artcards__wrapper">
          <Swiper className="artcards__menu"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={40}
            slidesPerView={4.5}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              500: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 30
              }
            }}
          >
            <SwiperSlide className="about__slide">
              <button className='artcards__btn artcards__btn--active'>All</button>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
              <button className='artcards__btn'>Kimyo</button>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
              <button className='artcards__btn'>Biologiya</button>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
              <button className='artcards__btn'>Matematika</button>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
              <button className='artcards__btn'>Adabiyot</button>
            </SwiperSlide>
            <SwiperSlide className="about__slide">
              <button className='artcards__btn'>Tibbiyot</button>
            </SwiperSlide>
          </Swiper>
          <div className='artcards__menu'>
          </div>
          <ul className="harticle__list">
            <li className="harticle__item">
              <div className="harticle__item-box--res">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
              <h4 className="harticle__item-title">
                Ways to strengthen financial control in the rational USE of
                state...
              </h4>
              <p className="harticle__item-name">Xodjayev Erkin</p>
              <div className="harticle__item-box">
                <span className="harticle__item-subtext">
                  CARREERS EDITORIAL
                </span>
                <span className="harticle__item-line">|</span>
                <span className="harticle__item-date">14 MAR 2022</span>
              </div>
            </li>
          </ul>
          <div className='confcards__btnbox'><button className='confcards__btn'>Show more</button></div>
        </div>
      </div>
    </section>
  )
}

export default ArticleCards