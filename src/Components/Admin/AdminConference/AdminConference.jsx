import { useRef, createRef } from 'react';
import { Link } from 'react-router-dom';

//SASS
import './AdminConference.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import search from '../../../Assets/img/search.svg'
import delete_icon from '../../../Assets/img/delete.svg'
import edit from '../../../Assets/img/edit.svg'
import dots from '../../../Assets/img/dots_icon.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminConference() {
    let fakeConfrenceData = [
        {
            id: 1,
            type: "Java"
        },
        {
            id: 2,
            type: "Phayton"
        },
        {
            id: 3,
            type: "JavaScript"
        },
        {
            id: 4,
            type: "Go"
        },
    ]
    const subNav = useRef([])

    subNav.current = fakeConfrenceData.map((_, i) => subNav.current[i] ?? createRef());

    function openSubNav(e) {
        subNav.current.map(item => {
            if (item.current.id == e.target.id) {
                return item.current && item.current.classList.toggle('admin__article--subbox-open')
            } else {
                return item.current && item.current.classList.remove('admin__article--subbox-open')
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
                            <ul className='conf__list'>
                                {
                                    fakeConfrenceData && fakeConfrenceData.map((e, i) => (
                                        <li key={i} className='conf__item'>
                                            <h3 className='conf__text conf__title'>O'zbekistonda {e.type} dasturchi qancha pul topadi?</h3>
                                            <p className='conf__text conf__name'>Abbos Janizakov</p>
                                            <p className='conf__text conf__type'>{e.type}</p>
                                            <time className='conf__text conf__time'>26/01/2022 | 10:00</time>
                                            <div id={i} onClick={openSubNav} className='admin__article--btn conf__btn'>
                                                <img style={{ "pointerEvents": "none" }} src={dots} alt="dots" />
                                                <div ref={subNav.current[i]} id={i} className='admin__article--subbox conf__subbox'>
                                                    <Link to='/admin/conference/form' type='button' className='admin__article--subbtn'>
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
            </section>
        </>
    )
}

export default AdminConference