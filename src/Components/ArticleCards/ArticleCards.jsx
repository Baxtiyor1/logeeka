import { useEffect, useRef, useState } from 'react';
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
  let [pageLimit, setPageLimit] = useState(1)
  let [categoryId, setCategoryId] = useState('all')
  let show_btn = useRef()
  let next_btn = useRef()

  useEffect(() => {
    axios.get('https://logeekascience.com/api/posts/allArticle?limit=6')
      .then(res => {
        setArticleData(res.data.data)
        setPageLimit(Math.ceil(res.data.count_selected / 6))
      })
    axios.get('https://logeekascience.com/api/category')
      .then(res => setCategoryData(res.data.data))
  }, [])

  useEffect(() => {
    if (searchvalue) {
      axios.get(`https://logeekascience.com/api/posts/allarticle?search=${searchvalue}&limit=6`)
        .then(res => {
          setArticleData(res.data.data)
          setPageLimit(Math.ceil(res.data.count_selected / 6))
        })
    }
  }, [searchvalue])


  function ByCategory(e) {
    let cat_id = e.target.dataset.category
    setCategoryId(cat_id)
    if (cat_id === 'all') {
      axios.get('https://logeekascience.com/api/posts/allArticle?limit=6')
        .then(res => {
          setArticleData(res.data.data)
          setPageLimit(Math.ceil(res.data.count_selected / 6))
        })
      show_btn.current && show_btn.current.classList.remove('artcards__nextbtn--close')
    } else {
      axios.get(`https://logeekascience.com/api/posts/allArticle?category_id=${cat_id}&limit=6`)
        .then(res => {
          setArticleData(res.data.data)
          setPageLimit(Math.ceil(res.data.count_selected / 6))
        })
        .catch(err => {
          setArticleData(false)
          alert(err.req.data.message)
        })
    }
    next_btn.current.dataset.page = 2
    if (Number(pageLimit) <= 1) {
      show_btn.current && show_btn.current.classList.add('artcards__nextbtn--close')
    } else {
      show_btn.current && show_btn.current.classList.remove('artcards__nextbtn--close')
    }
  }

  function nextData(e) {
    e.preventDefault()
    let pageCount = e.target.dataset.page
    if (Number(pageLimit) <= Number(pageCount) - 1) {
      show_btn.current && show_btn.current.classList.add('artcards__nextbtn--close')
    } else {
      show_btn.current && show_btn.current.classList.remove('artcards__nextbtn--close')

      if (Number(pageLimit) === Number(pageCount)) {
        show_btn.current && show_btn.current.classList.add('artcards__nextbtn--close')
      }

      if (categoryId === 'all') {
        axios.get(`https://logeekascience.com/api/posts/allArticle?page=${pageCount}&limit=6`)
          .then(res => {
            setArticleData([...articleData, ...res.data.data]);
            setPageLimit(Math.ceil(res.data.count_selected / 8));
          })
      } else {
        axios.get(`https://logeekascience.com/api/posts/allArticle?category_id=${categoryId}&page=${pageCount}&limit=6`)
          .then(res => {
            setArticleData([...articleData, ...res.data.data]);
            setPageLimit(Math.ceil(res.data.count_selected / 8));
          })
      }

    }

    e.target.dataset.page = Number(pageCount) + 1
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
            articleData && <div ref={show_btn} className='confcards__btnbox artcards__nextbtn'>
              <button ref={next_btn} data-page='2' onClick={nextData} className='confcards__btn'>Show more</button>
            </div>
          }
        </div>
      </div>
    </section>
  )
}

export default ArticleCards