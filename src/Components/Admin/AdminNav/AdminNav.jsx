import { NavLink } from 'react-router-dom'

//SASS
import './AdminNav.scss'

//IMAGES
import dots from '../../../Assets/img/dots_icon.svg'

function AdminNav() {
    return (
        <>
            
            <nav className="admin__nav">
                <div className="admin__subnav">
                    <NavLink to='/admin/article' className='admin__nav--btn'>Articles</NavLink>
                    <NavLink to='/admin/journal' className='admin__nav--btn'>Journal</NavLink>
                    <NavLink to='/admin/certificate' className='admin__nav--btn'>Certificates</NavLink>
                    <NavLink to='/admin/price' className='admin__nav--btn'>Pricing</NavLink>
                    <NavLink to='/admin/conference' className='admin__nav--btn'>Conference</NavLink>
                </div>
                <button className='admin__nav--btn'>
                    <img src={dots} alt="dots" />
                </button>
            </nav>
        </>
    )
}

export default AdminNav