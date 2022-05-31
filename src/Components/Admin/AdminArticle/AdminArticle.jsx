import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { createRef, useRef } from 'react'
import { useEffect, useState } from 'react'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminArticle.scss'
import '../Admin.scss'

//IMAGES
// import delete_icon from '../../../Assets/img/delete.svg'
// import edit from '../../../Assets/img/edit.svg'
// import dots from '../../../Assets/img/dots_icon.svg'
import search from '../../../Assets/img/search.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function AdminArticle() {
    let [token] = useToken()
    let [data, setData] = useState()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/posts/article', {
            headers: { token }
        })
            .then(res => setData(res.data.data))
            .catch(err => setData(false))
    }, [token])

    // const subNav = useRef([])

    // subNav.current = data && data.map((_, i) => subNav.current[i] ?? createRef());

    // function openSubNav(e) {
    //     subNav.current.map(item => {
    //         if (Number(item.current.id) === Number(e.target.id)) {
    //             return item.current && item.current.classList.toggle('admin__article--subbox-open');
    //         } else {
    //             return item.current && item.current.classList.remove('admin__article--subbox-open');
    //         }
    //     })
    // }

    return (
        <>
            <section className="admin">
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
                            <ul className='admin__article'>
                                {
                                    data && data.map((e, i) => {
                                        let year = e.created_at.split('T')[0]
                                        return (
                                            <li key={i} className='admin__article--item'>
                                                {/* <div id={i} onClick={openSubNav} className='admin__article--btn'>
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
                                                </div> */}
                                                <h3 className='admin__article--title'>{e.annastatsiya}</h3>
                                                <h4 className='admin__article--subtitle'>{e.full_name}</h4>
                                                <p className='admin__article--text'>CAREERS EDITORIAL | {year}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='admin__navigate'>
                                <button data-page='2' className='admin__navigate--btn'>next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminArticle