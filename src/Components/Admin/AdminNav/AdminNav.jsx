import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

//SASS
import './AdminNav.scss'

//IMAGES
import dots from '../../../Assets/img/dots_icon.svg'

function AdminNav({ route }) {
    let [formRoute, setFormRoute] = useState()

    useEffect(() => {
        if (route === 'add') {
            setFormRoute('form')
        }else{
            setFormRoute('')
        }
    }, [route])
    return (
        <>

            <nav className="admin__nav">
                <div className="admin__subnav">
                    <NavLink to={`/admin/article/${formRoute}`} className='admin__nav--btn'>Articles</NavLink>
                    <NavLink to={`/admin/journal/${formRoute}`} className='admin__nav--btn'>Journal</NavLink>
                    <NavLink to={`/admin/certificate/${formRoute}`} className='admin__nav--btn'>Certificates</NavLink>
                    <NavLink to={`/admin/price/${formRoute}`} className='admin__nav--btn'>Pricing</NavLink>
                    <NavLink to={`/admin/conference/${formRoute}`} className='admin__nav--btn'>Conference</NavLink>
                </div>
                <button className='admin__nav--btn'>
                    <img src={dots} alt="dots" />
                </button>
            </nav>
        </>
    )
}

export default AdminNav