import { Link } from 'react-router-dom'

//IMAGES

function MobileNav() {
    return (
        <>
            <Link className='header__link header__mobile--link' to='/'>Conference</Link>
            <Link className='header__link header__mobile--link' to='/'>Articles</Link>
            <Link className='header__link header__mobile--link' to='/'>Certificates</Link>
            <Link className='header__link header__mobile--link' to='/'>Pricing</Link>
            <Link className='header__link header__mobile--link' to='/'>Contacts</Link>
            <Link className='header__link header__mobile--link' to='/'>Journal</Link>
            <Link className='header__link header__mobile--link' to='/'>About us</Link>
        </>
    )
}

export default MobileNav