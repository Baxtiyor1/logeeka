
//SASS
import './Admin.scss'

//IMAGES
import search_icon from '../../Assets/img/search.svg'
import Logo from '../../Assets/img/logo.svg'

//Components
import AdminAside from './AdminAside/AdminAside'
import AdminNav from './AdminNav/AdminNav'

function Admin() {
    return (
        <main>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside active={'home'}/>
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
                                <img className='admin__area--input-icon' src={search_icon} alt="search_icon" />
                            </form>
                            <AdminNav />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Admin