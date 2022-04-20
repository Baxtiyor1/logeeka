import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'

//SASS
import './AdminNav.scss'

//IMAGES
import dots from '../../../Assets/img/dots_icon.svg'
import search_icon from '../../../Assets/img/search.svg'

function AdminNav({ search }) {
    const elemSearch = useRef()

    useEffect(() => {
        if (search == 'delete') {
            elemSearch.current && elemSearch.current.classList.add('admin__area--form-none')
        }else{
            elemSearch.current && elemSearch.current.classList.remove('admin__area--form-none')
        }
    },[search])

    return (
        <>
            <form ref={elemSearch} className='admin__area--form'>
                <input className='admin__area--input' type="text" placeholder='User search...' />
                <img className='admin__area--input-icon' src={search_icon} alt="search_icon" />
            </form>
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