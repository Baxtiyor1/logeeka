import { useRef, createRef } from 'react'
import { Link } from 'react-router-dom'

//SASS
import './AdminJournal.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import delete_icon from '../../../Assets/img/delete.svg'
import edit from '../../../Assets/img/edit.svg'
import search from '../../../Assets/img/search.svg'
import dots from '../../../Assets/img/dots_icon.svg'

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

    const journalNav = useRef([])

    journalNav.current = journalData.map((_, i) => journalNav.current[i] ?? createRef());

    function openJournalNav(e) {
        journalNav.current.map(item => {
            if (item.current.id === Number(e.target.id)) {
                return item.current && item.current.classList.toggle('admin__article--subbox-open');
            } else {
                return item.current && item.current.classList.remove('admin__article--subbox-open');
            }
        })
    }
    return (
        <>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside />
                    <div className="admin__bside">
                        <div className="admin__bside--header">
                            <form className='admin__bside--header-form'>
                                <img className='admin__bside--header-icon' src={search} alt="search" />
                                <input className='admin__bside--header-input' type="text" placeholder='Search...' />
                            </form>
                            <div className="admin__bside--header-box">
                                <img className="admin__bside--header-pic" src="http://picsum.photos/40" alt="img" />
                                <p className="admin__bside--header-text">John Doe</p>
                            </div>
                        </div>
                        <div className="admin__area">
                            <AdminNav />
                            <div className="journal">
                                <ul className='journal__list'>
                                    {
                                        journalData && journalData.map((e, i) => (
                                            <li key={i} className='journal__item'>
                                                <p className='journal__title'>The role of user preference in the customized control of .....</p>
                                                <p className='journal__text'>{e.text}</p>
                                                <time className='journal__time'>6-aprel 12:30</time>
                                                <div id={i} className='admin__article--btn journal__btn' onClick={openJournalNav}>
                                                    <img className='journal__img' src={dots} alt="dots" />
                                                    <div ref={journalNav.current[i]} id={i} className='admin__article--subbox'>
                                                        <Link to='/admin/journal/form' type='button' className='admin__article--subbtn'>
                                                            <img src={edit} alt="edit" />
                                                            <p>Change</p>
                                                        </Link>
                                                        <button type='button' className='admin__article--subbtn'>
                                                            <img src={delete_icon} alt="delete_icon" />
                                                            <p>Delete</p>
                                                        </button>
                                                    </div>
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