
//SASS
import './Admin.scss'

//IMAGES
import search from '../../Assets/img/search.svg'

//Components
import AdminAside from './AdminAside/AdminAside'
import AdminNav from './AdminNav/AdminNav'

function Admin() {
    return (
        <main>
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Admin