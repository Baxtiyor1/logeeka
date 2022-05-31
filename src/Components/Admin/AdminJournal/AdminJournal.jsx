import { useEffect, useState } from 'react'
import useToken from '../../../Hook/useToken'
import axios from 'axios'

//SASS
import './AdminJournal.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import delete_icon from '../../../Assets/img/delete.svg'
import Logo from '../../../Assets/img/logo.svg'
import search from '../../../Assets/img/search.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminJournal() {
    let [token] = useToken()
    let [deleteJour, setDeleteJour] = useState()
    let [journalData, setJournalData] = useState()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/journal', {
            headers: { token }
        })
            .then(res => setJournalData(res.data.data))
            .catch(err => console.log(err))
    }, [deleteJour])

    function deleteJournal(e) {
        e.preventDefault()
        let id = e.target.dataset.id
        axios.delete('https://logeekascience.com/api/journal', {
            headers: { token },
            data: { id }
        })
            .then(res => setDeleteJour(res.data.data))
            .catch(err => console.log(err.message))
    }
    return (
        <>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside />
                    <div className="admin__bside">
                        <div className="admin__bside--header">
                            <img className='admin__bside--header-icon' src={Logo} alt="Logo" />
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
                            <div className="journal">
                                <ul className='journal__list'>
                                    {
                                        journalData && journalData.map((e, i) => {
                                            let year = e.date.split('T')[0]
                                            let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                                            return (
                                                <li key={i} className='journal__item'>
                                                    <p className='journal__title'>{e.title}</p>
                                                    <time className='journal__time'>{year} | {time}</time>
                                                    <div data-id={e.journal_id} onClick={deleteJournal} className='admin__article--btn journal__btn'>
                                                        <img src={delete_icon} alt="delete_icon" />
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
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

export default AdminJournal