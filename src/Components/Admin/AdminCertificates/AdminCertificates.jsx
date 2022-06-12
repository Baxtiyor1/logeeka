import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminCertificates.scss'

//Images
import delete_icon from '../../../Assets/img/delete.svg'
import search from '../../../Assets/img/search.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminCertificates() {
    document.title = 'Admin Certificate'
    let [token] = useToken()
    let [deleteCert, setDeleteCert] = useState('')
    let [certificateData, setCertificateData] = useState()
    let [pageLimit, setPageLimit] = useState()
    let [pageCount, setPageCount] = useState(2)
    let show_btn = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/certificate?limit=10')
            .then(res => {
                setCertificateData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 10))
            })
            .catch(err => alert(err.req.data.message))
    }, [deleteCert])

    const SearchCert = e => {
        e.preventDefault()
        let ccid = e.target.value
        axios.get(`https://logeekascience.com/api/certificate?search=${ccid}&limit=10`)
            .then(res => {
                setCertificateData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 10))
            })
            .catch(err => alert(err.req.data.message))
    }

    function deleteCertificate(e) {
        e.preventDefault()
        let id = e.target.dataset.id
        axios.delete('https://logeekascience.com/api/certificate', {
            headers: { token },
            data: { id }
        })
            .then(res => setDeleteCert(res.data.data))
            .catch(err => alert(err.req.data.message))
    }

    useEffect(() => {
        if (Number(pageLimit) <= Number(pageCount) - 1) {
            show_btn.current && show_btn.current.classList.add('admin__navigate--close')
        } else {
            show_btn.current && show_btn.current.classList.remove('admin__navigate--close')
        }
    }, [pageLimit, pageCount])

    const NextFunction = e => {
        e.preventDefault()
        let page = e.target.dataset.page
        setPageCount(page);
        if (Number(pageLimit) <= Number(pageCount) - 1) {
            show_btn.current && show_btn.current.classList.add('admin__navigate--close')
        } else {
            show_btn.current && show_btn.current.classList.remove('admin__navigate--close')

            if (Number(pageLimit) === Number(pageCount)) {
                show_btn.current && show_btn.current.classList.add('admin__navigate--close')
            }

            axios.get(`https://logeekascience.com/api/certificate?page=${page}&limit=10`, {
                headers: { token }
            })
                .then(res => {
                    setCertificateData([...certificateData, ...res.data.data]);
                    setPageLimit(Math.ceil(res.data.count_selected / 10));
                })
                .catch(err => {
                    setCertificateData(false)
                    alert(err.req.data.message)
                })
        }
        e.target.dataset.page = Number(pageCount) + 1
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
                            <form onKeyUp={SearchCert} className='admin__area--form'>
                                <input className='admin__area--input' type="text" placeholder='User search...' />
                                <img className='admin__area--input-icon' src={search} alt="search_icon" />
                            </form>
                            <AdminNav />
                            <ul className='journal__list'>
                                {
                                    certificateData && certificateData.map((e, i) => (
                                        <li key={i} className='journal__item'>
                                            <p className='journal__text'>CCID: {e.ccid}</p>
                                            <div data-id={e.certificate_id} onClick={deleteCertificate} className='admin__article--btn journal__btn'>
                                                <img src={delete_icon} alt="delete_icon" />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div ref={show_btn} className='admin__navigate'>
                                <button onClick={NextFunction} data-page="2" className='admin__navigate--btn'>next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminCertificates