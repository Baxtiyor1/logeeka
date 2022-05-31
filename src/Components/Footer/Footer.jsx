import { Link } from 'react-router-dom'
//SASS
import './Footer.scss'

//IMAGES
import Logo from '../../Assets/img/logo.svg'
import facebook from '../../Assets/img/facebook.svg'
import insta from '../../Assets/img/insta.svg'
import telegram from '../../Assets/img/telegram-white.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__logoBox">
                        <img className='footer__logoBox--img' src={Logo} alt="Logo" />
                        <p className='footer__logoBox--title'>International scientific journal</p>
                        <p className='footer__logoBox--title'>Logeeka Science LLC</p>
                    </div>
                    <nav className="footer__nav">
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>Conference</h2>
                            <Link className='footer__link' to='/articles'>Articles</Link>
                            <Link className='footer__link' to='/certificates'>Certificates</Link>
                            <Link className='footer__link' to='/pricing'>Pricing</Link>
                            <Link className='footer__link' to='/conference'>Conference</Link>
                        </div>
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>About</h2>
                            <Link className='footer__link' to='/about'>About us</Link>
                            <Link className='footer__link' to='/'>Contract offer</Link>
                            <Link className='footer__link' to='/'>Privacy policy</Link>
                        </div>
                        <div className='footer__list'>
                            <h2 className='footer__subtitle'>Social media</h2>
                            <Link className='footer__link footer__sublink' to='https://t.me/Logeekascince'>
                                <img className='footer__icon' src={facebook} alt="facebook" />
                                Facebook
                            </Link>
                            <Link className='footer__link footer__sublink' to='https://t.me/Logeekascince'>
                                <img className='footer__icon' src={insta} alt="insta" />
                                Instagram
                            </Link>
                            <Link className='footer__link footer__sublink' to='https://t.me/Logeekascince'>
                                <img className='footer__icon' src={telegram} alt="telegram" />
                                Telegram
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='footer__subwrapper'>
                <p className='footer__subtext'>© Copyright 2022 Logeeka Science. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer