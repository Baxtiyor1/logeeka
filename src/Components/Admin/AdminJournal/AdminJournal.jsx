import { useRef, createRef } from 'react'
import { Link } from 'react-router-dom'

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
    const journalData = [
        {
            id: 1,
            text: "aaaa"
        },
        {
            id: 2,
            text: "aaaa"
        },
        {
            id: 3,
            text: "aaaa"
        },
        {
            id: 4,
            text: "aaaa"
        },
    ]
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
                                        journalData && journalData.map((e, i) => (
                                            <li key={i} className='journal__item'>
                                                <p className='journal__title'>The role of user preference in the customized control of .....</p>
                                                <p className='journal__text'>{e.text}</p>
                                                <time className='journal__time'>6-aprel 12:30</time>
                                                <div id={i} className='admin__article--btn journal__btn'>
                                                    <img src={delete_icon} alt="delete_icon" />
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminJournal