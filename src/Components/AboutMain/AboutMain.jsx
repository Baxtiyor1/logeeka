import React, { useEffect, useState } from "react";
import HomePartner from "../HomePartner/HomePartner";
import axios from "axios";

//SASS
import "./AboutMain.scss";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//IMAGES
import Facebook from "../../Assets/img/facebook-about.svg";
import Farruh from "../../Assets/img/farrukh.png";
import Twitter from "../../Assets/img/twitter-about.svg";
import Linkedin from "../../Assets/img/linkedin.svg";

//IMAGES
import LOGEEKA_LOGO from '../../Assets/img/logeeka_about_logo.png'

function AboutMain() {
  let [staffData, setStaffData] = useState()


  useEffect(()=> {
    axios.get('https://logeekascience.com/api/utils/get_staff?page=1&limit=1000')
    .then(res => setStaffData(res.data.data))
    .catch(err => alert(err.req.data.message))
  }, [])


  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__main">
            <img className="about__img" src={LOGEEKA_LOGO} alt="SAMDU_LOGO" />
            <div className="about__aside">
              <h2 className="about__title">Loogeka Science</h2>
              <p className="about__text">This platform is an official page of the international
                scientific journal of Logeeka Science, where you can find full
                information about our journals and conferences, services,
                scientific council, activities and contacts. Logeeka Science
                company was founded in 2022 by a team of young and ambitious
                people. All specialists of our team have many years of
                experience and successful cases in this area. Our goal is to
                present to the world a new type of scientific journal and to
                unite the scientific views of East and West at one point and
                serve to create new inventions. Our goal is to present to the
                world a new type of scientific journal and to unite the
                scientific views of East and West at one point and serve to
                create new inventions.</p>
            </div>
          </div>
          <div className="about__staff">
            {
              staffData && <h3 className="about__subtitle">Our staff</h3>
            }
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation={true}
            >
              {
                staffData && staffData.map((e, i) => (
                  <SwiperSlide key={i}>
                    <li className="staffs__item">
                      <img className="staffs__img" src={'https://logeekascience.com/api' + e.image_url} alt="user pic" />
                      <h3 className="staffs__subtitle">{e.full_name}</h3>
                      <div className="staffs__box">
                        <p className="staffs__text">{e.position}</p>
                        <div className="staffs__subbox">
                          <img className="staffs__subimg" src={Twitter} alt="twitter" />
                          <a href={e.facebook} rel="noreferrer" target={'_blank'}>
                          <img className="staffs__subimg" src={Facebook} alt="facebook" />
                          </a>
                          <img
                            className="staffs__subimg"
                            src={Linkedin}
                            alt="linkedin"
                          />
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
          <div className="about__staff">
            {
              staffData && <h3 className="about__subtitle">Editorial team</h3>
            }
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation={true}
            >
              {
                staffData && staffData.map((e, i) => (
                  <SwiperSlide key={i}>
                    <li className="staffs__item">
                      <img className="staffs__img" src={'https://logeekascience.com/api' + e.image_url} alt="user pic" />
                      <h3 className="staffs__subtitle">{e.full_name}</h3>
                      <div className="staffs__box">
                        <p className="staffs__text">{e.position}</p>
                        <div className="staffs__subbox">
                          <img className="staffs__subimg" src={Twitter} alt="twitter" />
                          <a href={e.facebook} target={'_blank'} rel="noreferrer">
                          <img className="staffs__subimg" src={Facebook} alt="facebook" />
                          </a>
                          <img
                            className="staffs__subimg"
                            src={Linkedin}
                            alt="linkedin"
                          />
                        </div>
                      </div>
                    </li>
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <HomePartner />
            <div className="about__document">
              {
                staffData && <h3 className="about__document--title">Documents</h3>
              }
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={30}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  960: {
                    spaceBetween:40,
                    slidesPerView: 4
                  },
                  1150:{
                    spaceBetween:50,
                  }
                }}
              >
                {
                  staffData && staffData.map((e, i) => (
                    <SwiperSlide key={i}>
                      <div className="staffs__item">
                        <img className="staffs__img" src={Farruh} alt="document" />
                        <h3 className="staffs__subtitle">Mas'uliyati cheklangan jamiyat guvohnomasi</h3>
                        <a href="https://logeekascience.com/api/files/1653916761448fanlar.pdf" className="about__document--link" download>Download PDF</a>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
