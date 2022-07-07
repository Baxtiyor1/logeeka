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
    var formData = new FormData();
    
    let { name, email, phone, text } = e.target.elements

    if(text.value.length > 300) alert("Message must be less than 300 caracters")
    
    if (name.value.length > 2 && name.value.length < 20 && email.value && phone.value && text.value.length < 300) {
      formData.append("full_name", name.value);
      formData.append("email", email.value);
      formData.append("phone", phone.value);
      formData.append("message_text", text.value);

      axios.post('https://logeekascience.com/api/messages', formData, {
        headers: {
          "type": "formData",
          "Content-Type": "form-data",
          "Accept": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
        .then(res => res.data.message === "Succes" && alert("Your request has been accepted"))
        .catch(err => alert(err.response));

      name.value = null
      email.value = null
      phone.value = null
      text.value = null
    }
  }
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__wrapper">
          <h1 className="contacts__title">CONTACTS</h1>
          <div className="contacts__top">
            <ul className="contacts__menu">
              <li className="contacts__item">
                <a className="contacts__link" target="_blank" rel="noreferrer" href="tel: +998901234567">
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Phone} alt="phone" />
                  </div>
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Phone Number</p>
                    <p className="contacts__textlink">+998901234567</p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" target="_blank" rel="noreferrer" href="mailto: logeekascince@gmail.com">
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
                <a className="contacts__link" target="_blank" rel="noreferrer" href="https://www.instagram.com/ibrahimgulyamov/">
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Insta} alt="insta" />
                  </div>
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Instagram</p>
                    <p className="contacts__textlink">Logeekascince</p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" target="_blank" rel="noreferrer" href="https://t.me/Logeekascince">
                  <div className="contacts__icon--box">
                    <img className="contacts__icon" src={Telegram} alt="tg" />
                  </div>
                  <div className="contacts__linkbox">
                    <p className="contacts__subtitle">Telegram</p>
                    <p className="contacts__textlink" >Logeekascince</p>
                  </div>
                </a>
              </li>
              <li className="contacts__item">
                <a className="contacts__link" target="_blank" rel="noreferrer" href="https://t.me/Logeekascince">
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
              <p className="contacts__form-text">If you have any questions, you can send us a message or contact us
                by phone.</p>
              <div className="contacts__inputbox">
                <input name="name" className="contacts__input" placeholder="Your name" type="text" />
                <input name="email" className="contacts__input" placeholder="Email address" type="email" />
              </div>
              <div className="contacts__inputbox">
                <input name="phone" className="contacts__input" placeholder="Phone Number (**) *** ** **" type="tel" />
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
