import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./InConference.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Images
import Calendar from "../../Assets/img/calendar.svg";
import Eye from "../../Assets/img/eye.svg";
import Clock from "../../Assets/img/clock.svg";
import Phone from "../../Assets/img/phone.svg";
import Mappin from "../../Assets/img/map-pin.svg";
import Share from "../../Assets/img/share-2.svg";
import Smth from "../../Assets/img/smthh.svg";
import Telegram from "../../Assets/img/telegram-white.svg";
import Whatsapp from "../../Assets/img/Whatsapp.svg";
import Facebook from "../../Assets/img/facebook.svg";
import Instagram from "../../Assets/img/insta.svg";
import Computer from "../../Assets/img/computer.png";
import Abdusattor from "../../Assets/img/Abdusattor.png";
import CardImg from '../../Assets/img/conf-cards.png';
import Avatar from '../../Assets/img/Avatars.png'
import arrow_icon from '../../Assets/img/chevron-right.svg'

function InConference() {
  let { id } = useParams()
  let [confData, setConfData] = useState()
  let linkBox = useRef()

  useEffect(() => {
    axios.get(`https://logeekascience.com/api/conference?id=${id}`)
      .then(res => setConfData(res.data.data))
  }, [id])

  function openLinks(){
    linkBox.current && linkBox.current.classList.toggle('inconference__list--active')
  }
  return (
    <section className="inconference">
      <div className="container">
        <div className="pricing__navlink">
          <Link className={"pricing__navlink"} to={"/"}>Home</Link>
          <span className={"pricing__navlink"}> | </span>
          <Link className={"pricing__navlink pricing__navlink--active"} to={"/#"} >Conference</Link>
        </div>
        <div className="news__wrapper inconference__wrapper">
          {
            confData && confData.map((e, i) => {
              let year = e.date.split('T')[0]
              let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
              return (
                <>
                  <div key={i} className="news__left inconference__left">
                    <div className="inconference__left-box">
                      <img className="inconference__left-pic" src={'https://logeekascience.com/api' + e.user_image} alt="avatar" />
                      <div className="inconference__box">
                        <h2 className="news__left-title inconference__left-title">{e.author}</h2>
                        <p className="news__left-text inconference__left-text">{e.profession}</p>
                      </div>
                    </div>
                    <ul className="inconference__menu">
                      <li className="inconference__item">
                        <img className="inconference__icon" src={Calendar} alt="Calendar" width={20} height={20} />
                        <p className="news__left-text inconference__left-text">Sana : </p>
                        <p className="inconference__name">{year}</p>
                      </li>
                      <li className="inconference__item">
                        <img className="inconference__icon" src={Clock} alt="Clock" width={20} height={20} />
                        <p className="news__left-text inconference__left-text">Vaqt : </p>
                        <p className="inconference__name">{time}</p>
                      </li>
                      <li className="inconference__item">
                        <img className="inconference__icon" src={Phone} alt="Phone" width={20} height={20} />
                        <p className="news__left-text inconference__left-text">Telefon : </p>
                        <p className="inconference__name">{'+998' + e.phone}</p>
                      </li>
                      <li className="inconference__item">
                        <img className="inconference__icon" src={Mappin} alt="Mappin" width={20} height={20} />
                        <p className="news__left-text inconference__left-text">Manzil:</p>
                        <p className="inconference__name--simple">{e.location}</p>
                      </li>
                    </ul>
                  </div>
                  <div key={i + 1} className="news__right inconference__right">
                    <h1 className="news__right-title">{e.title}</h1>
                    <img className="inconference__img" src={'https://logeekascience.com/api' + e.image} alt="image" />
                    <p className="news__right-text">{e.info}</p>
                    <button onClick={openLinks} className="inconference__btn">
                      <img src={Share} alt="Share" />
                    </button>
                    <ul ref={linkBox} className="inconference__list">
                      <li className="inconference__link">
                        <a href="/" target='_blank' className="inconference__btn">
                          <img src={Smth} alt="Smth" width={24} height={24} />
                        </a>
                      </li>
                      <li className="inconference__link">
                        <a href="/" target='_blank' className="inconference__btn">
                          <img src={Telegram} alt="Telegram" width={24} height={24} />
                        </a>
                      </li>
                      <li className="inconference__link">
                        <a href="/" target='_blank' className="inconference__btn">
                          <img src={Facebook} alt="Facebook" width={24} height={24} />
                        </a>
                      </li>
                      <li className="inconference__link">
                        <a href="/" target='_blank' className="inconference__btn">
                          <img src={Whatsapp} alt="Whatsapp" width={24} height={24} />
                        </a>
                      </li>
                      <li className="inconference__link">
                        <a href="/" target='_blank' className="inconference__btn">
                          <img src={Instagram} alt="Instagram" width={24} height={24} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="hnews__subbox inconference__swiper">
          <button className="hnews__btn inconference--left">
            <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
          </button>
          <button className="hnews__btn inconference--right">
            <img className="hnews__icon" src={arrow_icon} alt="arrow_icon" />
          </button>
        </div>
        <Swiper
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
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          navigation={{
            nextEl: '.inconference--right',
            prevEl: '.inconference--left'
          }}
        >
          {/* {
            inConfData && inConfData.map((e, i) => (
              <SwiperSlide key={i} className="confcards__item">
                <Link to='/conference/1'>
                  <img className='confcards__item-img' src={CardImg} alt="card-img" />
                  <div className="confcards__box">
                    <h3 className='confcards__item-title'>O'zbekistonda UX/UI dizayner qancha pul topadi?</h3>
                    <div className='confcards__item-datebox'>
                      <span className='confcards__item-date'>26/01/2022</span>
                      <span className='confcards__item-line'> | </span>
                      <span className='confcards__item-time'>10:00</span>
                    </div>
                    <div className='confcards__item-box'>
                      <div className='confcards__item-subbox'>
                        <img className='confcards__item-avatar' src={Avatar} alt="avatar" />
                        <div className='confcards__item-minbox'>
                          <p className='confcards__item-name'>{e.title}</p>
                          <p className='confcards__item-profession'>UX / UI Dizayner</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))
          } */}
        </Swiper>
      </div>
    </section>
  );
}

export default InConference;
