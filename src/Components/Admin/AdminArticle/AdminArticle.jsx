import axios from 'axios'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminArticle.scss'
import '../Admin.scss'

//IMAGES
import delete_icon from '../../../Assets/img/delete.svg'
import edit from '../../../Assets/img/edit.svg'
import search from '../../../Assets/img/search.svg'
import Logo from '../../../Assets/img/logo.svg'

//Components
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function AdminArticle() {
    document.title = 'Admin Article'
    let [token] = useToken()
    let [pageLimit, setPageLimit] = useState()
    let [pageCount, setPageCount] = useState(2)
    let [data, setData] = useState()
    let [delArticle, setDelArticle] = useState()
    let show_btn = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/posts/article?limit=8', {
            headers: { token }
        })
            .then(res => {
                setData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 8));
            })
            .catch(err => {
                setData(false)
                alert(err.req.data.message)
            })
    }, [token, delArticle])

    useEffect(() => {
        if (Number(pageLimit) <= Number(pageCount) - 1) {
            show_btn.current && show_btn.current.classList.add('admin__navigate--close')
        } else {
            show_btn.current && show_btn.current.classList.remove('admin__navigate--close')
        }
    }, [pageLimit, pageCount])
    
    const NextPage = e => {
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

            axios.get(`https://logeekascience.com/api/posts/article?page=${pageCount}&limit=8`, {
                headers: { token }
            })
                .then(res => {
                    setData([...data, ...res.data.data]);
                    setPageLimit(Math.ceil(res.data.count_selected / 8));
                })
                .catch(err => {
                    setData(false)
                    alert(err.req.data.message)
                })
        }
        e.target.dataset.page = Number(pageCount) + 1
    }

    const DeleteArticle = e => {
        e.preventDefault()
        let article_id = e.target.dataset.id
        axios.delete('https://logeekascience.com/api/posts/article', {
            headers: { token },
            data: { article_id }
        })
            .then(res => {
                alert(res.data.message)
                if (Number(res.data.status) === 200) {
                    setDelArticle("change")
                }
            })
            .catch(err => alert(err.req.data.message))
    }
    return (
        <>
            <section className="admin">
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
                                                <div className='admin__article--subbox'>
                                                    <Link to={`/admin/article/edit/${e.article_id}`} type='button' className='admin__article--subbtn'>
                                                        <img src={edit} alt="edit" />
                                                    </Link>
                                                    <button onClick={DeleteArticle} data-id={e.article_id} type='button' className='admin__article--subbtn'>
                                                        <img style={{ "pointerEvents": "none" }} src={delete_icon} alt="delete_icon" />
                                                    </button>
                                                </div>
                                                <h3 className='admin__article--title'>{e.title}</h3>
                                                <h4 className='admin__article--subtitle'>{e.full_name}</h4>
                                                <p className='admin__article--text'>CAREERS EDITORIAL | {year}</p>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                            <div className='admin__navigate'>
                                <button ref={show_btn} data-page='2' onClick={NextPage} className='admin__navigate--btn'>next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminArticle