import { NavLink } from 'react-router-dom'

//SASS
import './AdminNav.scss'

//IMAGES
import dots from '../../../Assets/img/dots_icon.svg'
import search from '../../../Assets/img/search.svg'

function AdminNav() {
    return (
        <>
            <form className='admin__area--form'>
                <input className='admin__area--input' type="text" placeholder='User search...' />
                <img className='admin__area--input-icon' src={search} alt="search" />
            </form>
            <nav className="admin__nav">
                <NavLink to='/admin/article' className='admin__nav--btn'>Articles</NavLink>
                <NavLink to='/admin/journal' className='admin__nav--btn'>Journal</NavLink>
                <NavLink to='/admin/certificate' className='admin__nav--btn'>Certificates</NavLink>
                <NavLink to='/admin/price' className='admin__nav--btn'>Pricing</NavLink>
                <NavLink to='/admin/conference' className='admin__nav--btn'>Conference</NavLink>
                <button className='admin__nav--btn'>
                    <img src={dots} alt="dots" />
                </button>
            </nav>
        </>
    )
}

export default AdminNav