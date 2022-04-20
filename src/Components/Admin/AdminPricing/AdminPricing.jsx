import { useRef, createRef } from 'react'
import { Link } from 'react-router-dom'

//SASS
import './AdminPricing.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import search from '../../../Assets/img/search.svg'
import delete_icon from '../../../Assets/img/delete.svg'
import edit from '../../../Assets/img/edit.svg'
import dots from '../../../Assets/img/dots_icon.svg'

//Components
import AdminNav from '../AdminNav/AdminNav'
import AdminAside from '../AdminAside/AdminAside'

function AdminPricing() {
    let facePriceData = [
        {
            id: 1,
            price: 10
        },
        {
            id: 2,
            price: 25
        },
        {
            id: 3,
            price: 30
        },
        {
            id: 4,
            price: 50
        }
    ]
    const subNav = useRef([])

    subNav.current = facePriceData.map((_, i) => subNav.current[i] ?? createRef());

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
                            <ul className='price__list'>
                                {
                                    facePriceData && facePriceData.map((e, i) => (
                                        <li key={i} className='price__item'>
                                            <div id={i} onClick={openSubNav} className='admin__article--btn'>
                                                <img style={{ "pointerEvents": "none" }} src={dots} alt="dots" />
                                                <div ref={subNav.current[i]} id={i} className='admin__article--subbox'>
                                                    <Link to='/admin/price/form' type='button' className='admin__article--subbtn'>
                                                        <img src={edit} alt="edit" />
                                                        <p>Change</p>
                                                    </Link>
                                                    <button type='button' className='admin__article--subbtn'>
                                                        <img src={delete_icon} alt="delete_icon" />
                                                        <p>Delete</p>
                                                    </button>
                                                </div>
                                            </div>
                                            <h2 className='price__title'>Publishing scientific articles in international journals</h2>
                                            <p className='price__text'><span className='price__subtext'>${e.price}</span>/$450</p>
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

export default AdminPricing