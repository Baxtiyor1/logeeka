import { useEffect, useState } from 'react'
import axios from 'axios'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminStaff.scss'

//Images
import delete_icon from '../../../Assets/img/delete.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminStaff() {
    document.title = 'Admin Certificate'
    let [token] = useToken()
    let [deleteCert, setDeleteCert] = useState('')
    let [staffData, setStaffData] = useState()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/utils/get_staff?limit=1000')
            .then(res => {
                setStaffData(res.data.data)
            })
            .catch(err => alert(err.req.data.message))
    }, [deleteCert])

    function deleteCertificate(e) {
        e.preventDefault()
        let id = e.target.dataset.id
        
        axios.delete(`https://logeekascience.com/api/utils/delete_staff?id=${id}`, {
            headers: { token },
            data: { id }
        })
            .then(res => {
                setDeleteCert(res.data.data)
                alert(res.data.message)
            })
            .catch(err => alert(err.req.data.message))
    }

    return (
        <>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside active={'home'} />
                    <div className="admin__bside">
                        <div className="admin__bside--header">
                            <img className='admin__bside--header-icon' src={Logo} alt="Logo" />
                            <div className="admin__bside--header-box">
                                <img className="admin__bside--header-pic" src="http://picsum.photos/40" alt="img" />
                                <p className="admin__bside--header-text">John Doe</p>
                            </div>
                        </div>
                        <div className="admin__area">
                            <AdminNav />
                            <ul className='astaff__list'>
                                {
                                    staffData && staffData.map((e, i) => (
                                        <li key={i} className='astaff__item'>
                                            <img className='astaff__pic' src={"https://logeekascience.com/api" + e.image_url} alt="user pic" />
                                            <p className='astaff__text'>{e.full_name}</p>
                                            <p className='astaff__subtext'>{e.position}</p>
                                            <div data-id={e.our_staff_id} onClick={deleteCertificate} className='admin__article--btn astaff__btn'>
                                                <img src={delete_icon} alt="delete_icon" />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminStaff