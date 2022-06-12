import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

//SASS
import './AdminNav.scss'

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
                    <NavLink to={`/admin/partner/${formRoute}`} className='admin__nav--btn'>Partner</NavLink>
                    <NavLink to={`/admin/staff/${formRoute}`} className='admin__nav--btn'>Stafff</NavLink>
                </div>
            </nav>
        </>
    )
}

export default AdminNav