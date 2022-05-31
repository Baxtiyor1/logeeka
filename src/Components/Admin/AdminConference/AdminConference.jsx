import { useEffect, useState } from 'react'
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
    let [token] = useToken()
    let [confData, setConfData] = useState()
    let [delConf, setDelConf] = useState()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/conference')
            .then(res => setConfData(res.data.data))
            .catch(err => console.log(err))
    }, [delConf])

    console.log(confData);
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
    return (
        <>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside />
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
                                <input className='admin__area--input' type="text" placeholder='User search...' />
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
                            <div className='admin__navigate'>
                                <button className='admin__navigate--btn'>next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminConference