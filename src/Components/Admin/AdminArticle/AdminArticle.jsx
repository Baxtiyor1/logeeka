import { Link } from 'react-router-dom'
import { createRef, useRef } from 'react'

//SASS
import './AdminArticle.scss'
import '../Admin.scss'

//IMAGES
import delete_icon from '../../../Assets/img/delete.svg'
import edit from '../../../Assets/img/edit.svg'
import dots from '../../../Assets/img/dots_icon.svg'
import search from '../../../Assets/img/search.svg'

//Components
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function AdminArticle() {

    const data = [
        {
            text: "sdasda"
        },
        {
            text: "dasd"
        },
        {
            text: "3g"
        },
        {
            text: "cvb"
        },
    ]
    const subNav = useRef([])

    subNav.current = data.map((_, i) => subNav.current[i] ?? createRef());

    function openSubNav(e) {
        subNav.current.map(item => {
            if (item.current.id == e.target.id) {
                item.current.classList.toggle('admin__article--subbox-open');
            } else {
                item.current.classList.remove('admin__article--subbox-open');
            }
        })
    }

    return (
        <>
            <section className="admin">
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
                            <ul className='admin__article'>
                                {
                                    data.map((e, i) => (
                                        <li key={i} className='admin__article--item'>
                                            <div id={i} onClick={openSubNav} className='admin__article--btn'>
                                                <img style={{ "pointerEvents": "none" }} src={dots} alt="dots" />
                                                <div ref={subNav.current[i]} id={i} className='admin__article--subbox'>
                                                    <Link to='/admin/article/form' type='button' className='admin__article--subbtn'>
                                                        <img src={edit} alt="edit" />
                                                        <p>Change</p>
                                                    </Link>
                                                    <button type='button' className='admin__article--subbtn'>
                                                        <img src={delete_icon} alt="delete_icon" />
                                                        <p>Delete</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className='admin__article--title'>{e.text}</h3>
                                            <h4 className='admin__article--subtitle'>Xodjayev Erkin</h4>
                                            <p className='admin__article--text'>CAREERS EDITORIAL | 14 MAR 2022</p>
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

export default AdminArticle