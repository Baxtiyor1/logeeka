import { useEffect, useState } from 'react'
import axios from 'axios'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminPartner.scss'

//Images
import delete_icon from '../../../Assets/img/delete.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminPartner() {
    document.title = 'Admin Certificate'
    let [token] = useToken()
    let [deletePartner, setDeletePartner] = useState('')
    let [partnerData, setPartnerData] = useState()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/utils/get_partner?limit=100')
            .then(res => {
                setPartnerData(res.data.data)
            })
            .catch(err => alert(err.req.data.message))
    }, [deletePartner])

    function deleteCertificate(e) {
        e.preventDefault()
        let id = e.target.dataset.id
        
        axios.delete(`https://logeekascience.com/api/utils/delete_partner?id=${id}`, {
            headers: { token },
            data: { id }
        })
            .then(res => {
                setDeletePartner(res.data.data)
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
                            <ul className='apartner__list'>
                                {
                                    partnerData && partnerData.map((e, i) => (
                                        <li key={i} className='apartner__item'>
                                            <img className='apartner__pic' src={"https://logeekascience.com/api" + e.partner_image} alt="partner" />
                                            <p className='apartner__text'>{e.partner_name}</p>
                                            <a className='apartner__link' href={e.partner_url}>Link to syte</a>
                                            <div data-id={e.partner_id} onClick={deleteCertificate} className='admin__article--btn astaff__btn'>
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

export default AdminPartner