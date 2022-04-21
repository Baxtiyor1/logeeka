
//SASS
import './AdminPricing.scss'
import '../AdminArticle/AdminArticle.scss'

//Images
import search from '../../../Assets/img/search.svg'
import delete_icon from '../../../Assets/img/delete.svg'
import Logo from '../../../Assets/img/logo.svg'

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
                            <ul className='price__list'>
                                {
                                    facePriceData && facePriceData.map((e, i) => (
                                        <li key={i} className='price__item'>
                                            <div className='admin__article--btn'>
                                                <img src={delete_icon} alt="delete_icon" />
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