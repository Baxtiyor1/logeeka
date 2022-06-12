import { useEffect, useState, useRef } from 'react'
import useToken from '../../../Hook/useToken'
import axios from 'axios'

//SASS
import './AdminConference.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import search from '../../../Assets/img/search.svg'
import delete_icon from '../../../Assets/img/delete.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminConference() {
    document.title = 'Admin Conference'

    let [token] = useToken()
    let [confData, setConfData] = useState()
    let [delConf, setDelConf] = useState()
    let [pageLimit, setPageLimit] = useState()
    let [pageCount, setPageCount] = useState(2)
    let show_btn = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/conference?limit=8')
            .then(res => {
                setConfData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 8));
            })
            .catch(err => alert(err.req.data.message))
    }, [delConf])

    function deleteConf(e) {
        e.preventDefault()
        let id = e.target.dataset.id
        axios.delete('https://logeekascience.com/api/conference', {
            headers: { token },
            data: { conference_id: id }
        })
            .then(res => setDelConf(res.data.data))
            .catch(err => console.log(err.message))
    }

    const Searchfunction = e => {
        e.preventDefault()
        let title = e.target.value.trim()
        axios.get(`https://logeekascience.com/api/conference?search=${title}&limit=8`)
            .then(res => {
                setConfData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 8));
            })
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
        setPageCount(page)
        if (Number(pageLimit) <= Number(pageCount) - 1) {
            show_btn.current && show_btn.current.classList.add('admin__navigate--close')
        } else {
            show_btn.current && show_btn.current.classList.remove('admin__navigate--close')

            if (Number(pageLimit) === Number(pageCount)) {
                show_btn.current && show_btn.current.classList.add('admin__navigate--close')
            }

            axios.get(`https://logeekascience.com/api/conference?page=${pageCount}&limit=8`, {
                headers: { token }
            })
                .then(res => {
                    setConfData([...confData, ...res.data.data]);
                    setPageLimit(Math.ceil(res.data.count_selected / 8));
                })
                .catch(err => {
                    setConfData(false)
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
                            <img className='admin__bside--header-icon' src={Logo} alt="search" />
                            <div className="admin__bside--header-box">
                                <img className="admin__bside--header-pic" src="http://picsum.photos/40" alt="img" />
                                <p className="admin__bside--header-text">John Doe</p>
                            </div>
                        </div>
                        <div className="admin__area">
                            <form className='admin__area--form'>
                                <input onChange={Searchfunction} className='admin__area--input' type="text" placeholder='User search...' />
                                <img className='admin__area--input-icon' src={search} alt="search_icon" />
                            </form>
                            <AdminNav />
                            <ul className='conf__list'>
                                {
                                    confData && confData.map((e, i) => {
                                        let year = e.date.split('T')[0]
                                        let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                                        return (
                                            <li key={i} className='conf__item'>
                                                <h3 className='conf__text conf__title'>{e.title}</h3>
                                                <p className='conf__text conf__name'>{e.author}</p>
                                                <p className='conf__text conf__type'>{e.profession}</p>
                                                <time className='conf__text conf__time'>{year} | {time}</time>
                                                <div data-id={e.conference_id} onClick={deleteConf} className='admin__article--btn conf__btn'>
                                                    <img src={delete_icon} alt="delete_icon" />
                                                </div>
                                            </li>
                                        )
                                    })
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

export default AdminConference