import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

//SASS
import "./HomeConfirence.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
// import Eye from '../../Assets/img/eye.svg'
// import CardImg from '../../Assets/img/conf-cards.png';
// import Avatar from '../../Assets/img/Avatars.png'
import arrow_icon from '../../Assets/img/chevron-right.svg'

function HomeConfirence() {
  let arrowBox = useRef()
  let [confirenceData, setConfirenceData] = useState(false)

  useEffect(() => {
    axios.get('https://logeekascience.com/api/conference?limit=4')
      .then(res => setConfirenceData(res.data.data))
  }, [])

  if (!confirenceData) {
    arrowBox.current && arrowBox.current.classList.add('hnews__box--off')
  } else {
    arrowBox.current && arrowBox.current.classList.remove('hnews__box--off')
  }

  return (
    <section className="hnews">
      <div className="container">
        <div className="hnwes__wrapper">
          <div ref={arrowBox} className="hnews__box">
            <Link className="hnews__title" to={"conference# "}>Conference</Link>
            {/* <div className="hnews__subbox">
              <button className="hnews__btn hnews__btn--left">
                <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
              </button>
              <button className="hnews__btn hnews__btn--right">
                <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
              </button>
            </div> */}
          </div>
          <div className="hnews__list">
            {
              confirenceData && confirenceData.map((e, i) => {
                let year = e.date.split('T')[0]
                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                return (
                  <Link key={i} to={'/conference/' + e.conference_id} className="hnews__item">
                    <div className='confcards__item-imgbox'>
                      <img className='confcards__item-img' src={'https://logeekascience.com/api' + e.image} alt="card-img" />
                    </div>
                    <div className="confcards__box">
                      <h3 className='confcards__item-title'>{e.title}</h3>
                      <div className='confcards__item-datebox'>
                        <span className='confcards__item-date'>{year}</span>
                        <span className='confcards__item-line'> | </span>
                        <span className='confcards__item-time'>{time}</span>
                      </div>
                      <div className='confcards__item-box'>
                        <div className='confcards__item-subbox'>
                          <img className='confcards__item-avatar' src={'https://logeekascience.com/api' + e.user_image} alt="avatar" />
                          <div className='confcards__item-minbox'>
                            <p className='confcards__item-name'>{e.author}</p>
                            <p className='confcards__item-profession'>{e.profession}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })
            }
          </div>
          {/* <Swiper className="hnews__swiper"
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
            {
              confirenceData && confirenceData.map((e, i) => {
                let year = e.date.split('T')[0]
                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                return (
                  <SwiperSlide key={i} className="hnews__slide">
                    <Link to={'/conference/' + e.conference_id}>
                      <img className='confcards__item-img' src={'https://logeekascience.com/api' + e.image} alt="card-img" />
                      <div className="confcards__box">
                        <h3 className='confcards__item-title'>{e.title}</h3>
                        <div className='confcards__item-datebox'>
                          <span className='confcards__item-date'>{year}</span>
                          <span className='confcards__item-line'> | </span>
                          <span className='confcards__item-time'>{time}</span>
                        </div>
                        <div className='confcards__item-box'>
                          <div className='confcards__item-subbox'>
                            <img className='confcards__item-avatar' src={'https://logeekascience.com/api' + e.user_image} alt="avatar" />
                            <div className='confcards__item-minbox'>
                              <p className='confcards__item-name'>{e.title}</p>
                              <p className='confcards__item-profession'>{e.profession}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                )
              })
            }
          </Swiper> */}
        </div>
      </div>
    </section>
  );
}

export default HomeConfirence;
