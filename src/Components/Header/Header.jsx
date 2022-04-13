import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

//SASS
import './Header.scss'

//IMAGES
import Logo from '../../Assets/img/logo.svg'
import x_icon from '../../Assets/img/menu.svg'
import Bar from '../../Assets/img/bar_icon.svg'

//SubComponents
import MobileNav from './mobileNav'

function Header() {
    const barList = useRef()
    function openBar() {
        barList.current.classList.add('header__open')
    }
    function closeBar() {
        barList.current.classList.remove('header__open')
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="header__nav">
                    <img className='header__logo' src={Logo} alt="logo" />
                    <div className='header__list'>
                        <NavLink className='header__link' to='/'>Conference</NavLink>
                        <NavLink className='header__link' to='/'>Articles</NavLink>
                        <NavLink className='header__link' to='/'>Certificates</NavLink>
                        <NavLink className='header__link' to='/'>Pricing</NavLink>
                        <NavLink className='header__link' to='/'>Contacts</NavLink>
                        <NavLink className='header__link' to='/'>Journal</NavLink>
                        <NavLink className='header__link' to='/'>About us</NavLink>
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