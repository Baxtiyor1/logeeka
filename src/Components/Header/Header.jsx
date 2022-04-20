import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

//SASS
import './Header.scss'

//IMAGES
import Logo from '../../Assets/img/logo.svg'
import x_icon from '../../Assets/img/menu.svg'
import Bar from '../../Assets/img/bar_icon.svg'

//SubComponents
import MobileNav from './mobileNav'

function Header() {
    const tagHeader = useRef()
    const barList = useRef()
    function openBar() {
        barList.current.classList.add('header__open')
    }
    function closeBar() {
        barList.current.classList.remove('header__open')
    }
    const path = useParams()
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            return tagHeader.current ? tagHeader.current.classList.add('header__bg') : null
        } else {
            return tagHeader.current ? tagHeader.current.classList.remove('header__bg') : null
        }
    })
    return (
        <header ref={tagHeader} className='header'>
            <div className="container">
                <div className="header__nav">
                    <Link to={'/'}>
                        <img className='header__logo' src={Logo} alt="logo" />
                    </Link>
                    <div className='header__list'>
                        <Link className='header__link' to='/conference'>Conference</Link>
                        <Link className='header__link' to='/articles'>Articles</Link>
                        <Link className='header__link' to='/certificates'>Certificates</Link>
                        <Link className='header__link' to='/pricing'>Pricing</Link>
                        <Link className='header__link' to='/contacts'>Contacts</Link>
                        <Link className='header__link' to='/journal'>Journal</Link>
                        <Link className='header__link' to='/about'>About us</Link>
                    </div>
                    <button onClick={openBar} className='header__bar--open'><img src={Bar} alt="bar" /></button>
                    <div ref={barList} className="header__bar">
                        <div className='header__bar--box'>
                            <p className='header__bar--title'>Menu</p>
                            <button className='header__close' onClick={closeBar}>
                                <img className='header__bar--icon' src={x_icon} alt="img" />
                            </button>
                        </div>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header