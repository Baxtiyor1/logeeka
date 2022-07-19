import { Link } from 'react-router-dom'

//IMAGES

function MobileNav() {
    return (
        <>
            <Link className='header__link header__mobile--link' to='/conference'>Conferences</Link>
            <Link className='header__link header__mobile--link' to='/articles'>Articles</Link>
            <Link className='header__link header__mobile--link' to='/certificates'>Certificates</Link>
            <Link className='header__link header__mobile--link' to='/pricing'>Pricing</Link>
            <Link className='header__link header__mobile--link' to='/contacts'>Contacts</Link>
            <Link className='header__link header__mobile--link' to='/journal'>Journal</Link>
            <Link className='header__link header__mobile--link' to='/about'>About us</Link>
        </>
    )
}

export default MobileNav