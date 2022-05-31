import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

//SASS
import './ArticleCards.scss';
import '../InArticles/InArticles.scss'

function ArticleCards({ searchvalue }) {
  let [articleData, setArticleData] = useState()
  let [categoryData, setCategoryData] = useState()

  useEffect(() => {
    if(searchvalue){
      axios.get(`https://logeekascience.com/api/posts/allarticle?search=${searchvalue}`)
        .then(res => setArticleData(res.data.data))
    }
  }, [searchvalue])

  useEffect(() => {
    axios.get('https://logeekascience.com/api/posts/allArticle')
      .then(res => setArticleData(res.data.data))

    axios.get('https://logeekascience.com/api/category')
      .then(res => setCategoryData(res.data.data))
  }, [!searchvalue])

  function ByCategory(e) {
    let cat_id = e.target.dataset.category
    if (cat_id == 'all') {
      axios.get('https://logeekascience.com/api/posts/allArticle')
        .then(res => setArticleData(res.data.data))
    } else {
      axios.get(`https://logeekascience.com/api/posts/allArticle?category_id=${cat_id}`)
        .then(res => setArticleData(res.data.data))
        .catch(err => setArticleData(false))
    }
  }

  function nextData(e) {
    let page = e.target.dataset.page
    axios.get(`https://logeekascience.com/api/posts/allArticle?page=${page}`)
      .then(res => setArticleData(res.data.data))
      .catch(err => console.log(err))
    e.target.dataset.page = Number(page) + 1
  }
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
                slidesPerView: 2.2,
                spaceBetween: 20
              },
              375: {
                slidesPerView: 2.5,
                spaceBetween: 20
              },
              700: {
                slidesPerView: 4.5,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 30
              }
            }}
          >
            {
              categoryData && <SwiperSlide className="about__slide">
                <button data-category='all' onClick={ByCategory} className='artcards__btn artcards__btn--active'>All</button>
              </SwiperSlide>
            }

            {
              categoryData && categoryData.map((e, i) => (
                <SwiperSlide key={i} className="about__slide">
                  <button data-category={e.category_id} onClick={ByCategory} className='artcards__btn'>{e.category_name}</button>
                </SwiperSlide>
              ))
            }
          </Swiper>
          <div className='artcards__menu'>
          </div>
          <ul className="harticle__list artcards__list">
            {
              articleData && articleData.map((e, i) => {
                let year = e.created_at.split('T')[0]
                return (
                  <Link to={'/articles/' + e.article_id} key={i} className="harticle__item">
                    <h4 className="harticle__item-title">{e.title}</h4>
                    <p className="harticle__item-name">{e.full_name}</p>
                    <div className="harticle__item-box">
                      <span className="harticle__item-subtext">CAREERS EDITORIAL</span>
                      <span className="harticle__item-line">|</span>
                      <span className="harticle__item-date">{year}</span>
                    </div>
                  </Link>
                )
              })
            }
            {
              !articleData && <h2 style={{ "width": "1400px", "maxWidth": "100%", 'textAlign': "center" }}>This category's articles are not found or No internet connection...</h2>
            }
          </ul>
          {
            articleData && <div className='confcards__btnbox'>
              <button data-page='2' onClick={nextData} className='confcards__btn'>Show more</button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ArticleCards