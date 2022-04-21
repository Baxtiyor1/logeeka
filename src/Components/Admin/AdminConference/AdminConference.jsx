
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
                                    fakeConfrenceData && fakeConfrenceData.map((e, i) => (
                                        <li key={i} className='conf__item'>
                                            <h3 className='conf__text conf__title'>O'zbekistonda {e.type} dasturchi qancha pul topadi?</h3>
                                            <p className='conf__text conf__name'>Abbos Janizakov</p>
                                            <p className='conf__text conf__type'>{e.type}</p>
                                            <time className='conf__text conf__time'>26/01/2022 | 10:00</time>
                                            <div className='admin__article--btn conf__btn'>
                                                <img src={delete_icon} alt="delete_icon" />
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