import axios from "axios";


//SASS
import "./ContactsMain.scss";

// Import Images
import Phone from "../../Assets/img/phone.svg";
import Mail from "../../Assets/img/mail.svg";
import Insta from "../../Assets/img/004-instagram.svg";
import Telegram from "../../Assets/img/telegram.svg";
import Facebook from "../../Assets/img/facebook-icon.svg";

function ContactsMain() {

  function sendMessage(e) {
    e.preventDefault()
    let { name, email, phone, nik_name, text } = e.target.elements
    axios.post('https://logeekascience.com/api/messages', {
      "full_name": name.value.trim(),
      "email": email.value.trim(),
      "phone": phone.value.trim(),
      "telegram": nik_name.value.trim(),
      "message_text": text.value.trim()
    })
      .then(function (response) {
        console.log(response, 'res');
      })
      .catch(function (error) {
        console.log(error.message, 'err');
      });

      name.value = null
      email.value = null
      phone.value = null
      nik_name.value = null
      text.value = null
  }
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <div className="contacts__top">
            <ul className="contacts__menu">
              <li className="contacts__item">
                <a className="contacts__link" href="tel: +998901234567">
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Phone} alt="phone" />
                  </div>
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
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Mail} alt="mail" />
                  </div>
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Email Address</p>
                    <p className="contacts__textlink" >logeekascince@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" href="https://www.instagram.com/ibrahimgulyamov/">
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Insta} alt="insta" />
                  </div>
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
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Telegram} alt="tg" />
                  </div>
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
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Facebook} alt="face" />
                  </div>
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Facebook</p>
                    <p className="contacts__textlink">Logeekascince</p>
                  </div>
                </a>
              </li>
            </ul>
            <form className="contacts__form" onSubmit={sendMessage}>
              <h2 className="contacts__form-title">Send Message</h2>
              <p className="contacts__form-text">If you have any questions, you can send us an SMS or contact us
                by phone you can also contact us via social networks. </p>
              <div className="contacts__inputbox">
                <input name="name" className="contacts__input" placeholder="Your name" type="text" />
                <input name="email" className="contacts__input" placeholder="Email address" type="email" />
              </div>
              <div className="contacts__inputbox">
                <input name="phone" className="contacts__input" placeholder="Phone number" type="tel" />
                <input name="nik_name" className="contacts__input" placeholder="Telegram" type="text" />
              </div>
              <textarea name="text" className="contacts__input contacts__textarea" placeholder="Message" />
              <button type="submit" className="contacts__btn">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsMain;
