import React from "react";
import "./ContactsMain.scss";

// Import Images
import Phone from "../../Assets/img/phone.svg";
import Mail from "../../Assets/img/mail.svg";
import Insta from "../../Assets/img/004-instagram.svg";
import Telegram from "../../Assets/img/telegram.svg";
import Facebook from "../../Assets/img/facebook-icon.svg";

function ContactsMain() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__top">
            <ul className="contacts__menu">
              <li className="contacts__item">
                <a className="contacts__link" href="tel: +998901234567">
                  <img className="contacts__icon" src={Phone} alt="phone" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Phone Number</p>
                    <p className="contacts__textlink">
                      +998901234567
                    </p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="mailto: logeekascince@gmail.com">
                  <img className="contacts__icon" src={Mail} alt="mail" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Email Address</p>
                    <p className="contacts__textlink" >
                      logeekascince@gmail.com
                    </p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="https://www.instagram.com/ibrahimgulyamov/">
                  <img className="contacts__icon" src={Insta} alt="insta" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Instagram</p>
                    <p className="contacts__textlink">
                      Logeekascince
                    </p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="https://t.me/Logeekascince">
                  <img className="contacts__icon" src={Telegram} alt="tg" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Telegram</p>
                    <p className="contacts__textlink" >
                      Logeekascince
                    </p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="https://t.me/Logeekascince">
                  <img className="contacts__icon" src={Facebook} alt="face" />
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Facebook</p>
                    <p className="contacts__textlink">
                      Logeekascince
                    </p>
                  </div>
                </a>
              </li>
            </ul>
            <form className="contacts__form">
              <h2 className="contacts__form-title">Send Message</h2>
              <p className="contacts__form-text">
                If you have any questions, you can send us an SMS or contact us
                by phone you can also contact us via social networks.
              </p>
              <div className="contacts__inputbox">
                <input
                  className="contacts__input"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="contacts__input"
                  placeholder="Email address"
                  type="text"
                />
              </div>
              <div className="contacts__inputbox">
                <input
                  className="contacts__input"
                  placeholder="Phone number"
                  type="text"
                />
                <input
                  className="contacts__input"
                  placeholder="Telegram"
                  type="text"
                />
              </div>
              <textarea
                className="contacts__input contacts__textarea"
                placeholder="Message"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsMain;