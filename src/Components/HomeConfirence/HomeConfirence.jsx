import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

//SASS
import "./HomeConfirence.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


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
          {
            confirenceData && <div ref={arrowBox} className="hnews__box">
            <Link className="hnews__title" to={"conference# "}>Conference</Link>
          </div>
          }
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
        </div>
      </div>
    </section>
  );
}

export default HomeConfirence;
