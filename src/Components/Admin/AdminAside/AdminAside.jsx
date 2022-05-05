import { Link } from 'react-router-dom'

//SASS
import './AdminAside.scss'

//images
import server from '../../../Assets/img/server.svg'
import plus_icon from '../../../Assets/img/plus-circle.svg'
import power from '../../../Assets/img/power.svg'
import setting from '../../../Assets/img/settings.svg'

function AdminAside() {
    return (
        <div className="admin__aside">
            <div>
                <div className="admin__aside--box">
                    <div className="admin__aside--circle"><span></span></div>
                    <h2 className='admin__aside--title'>Admin Panel</h2>
                </div>
                <div className='admin__aside--list'>
                    <Link to={'/admin'} className='admin__aside--item admin__aside--item-active'>
                        <img className='admin__aside--icon' src={server} alt="server" />
                        <p className='admin__aside--text'>Home</p>
                    </Link>
                    <Link to={'/admin/add'} className='admin__aside--item'>
                        <img className='admin__aside--icon' src={plus_icon} alt="plus_icon" />
                        <p className='admin__aside--text'>Add</p>
                    </Link>
                    {/* <li className='admin__aside--item'>
                        <img className='admin__aside--icon' src={setting} alt="setting" />
                        <p className='admin__aside--text'>Settings</p>
                    </li> */}
                </div>
            </div>
            <button className='admin__aside--exit'>
                <img className='admin__aside--icon' src={power} alt="power" />
                <p className='admin__aside--text'>exit</p>
            </button>
        </div>
    )
}

export default AdminAside