import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import useToken from '../../../Hook/useToken'

//SASS
import './AdminAside.scss'

//images
import server from '../../../Assets/img/server.svg'
import plus_icon from '../../../Assets/img/plus-circle.svg'
import power from '../../../Assets/img/power.svg'

function AdminAside(props) {
    let [ , setToken] = useToken()
    let homeElem = useRef()
    let addElem = useRef()
    let messageElem = useRef()

    useEffect(() => {
        if (props.active === "home") {
            homeElem.current && homeElem.current.classList.add('admin__aside--item-active')
            messageElem.current && messageElem.current.classList.remove('admin__aside--item-active')
            addElem.current && addElem.current.classList.remove('admin__aside--item-active')
        } else if (props.active === "add") {
            addElem.current && addElem.current.classList.add('admin__aside--item-active')
            messageElem.current && messageElem.current.classList.remove('admin__aside--item-active')
            homeElem.current && homeElem.current.classList.remove('admin__aside--item-active')
        }else if(props.active === "message"){
            messageElem.current && messageElem.current.classList.add('admin__aside--item-active')
            homeElem.current && homeElem.current.classList.remove('admin__aside--item-active')
            addElem.current && addElem.current.classList.remove('admin__aside--item-active')
        }
    }, [props.active])

    function leaveAdmin(){
        setToken(false)
    }
    return (
        <div className="admin__aside">
            <div>
                <div className="admin__aside--box">
                    <div className="admin__aside--circle"><span></span></div>
                    <h2 className='admin__aside--title'>Admin Panel</h2>
                </div>
                <div className='admin__aside--list'>
                    <Link ref={homeElem} to={'/admin'} className='admin__aside--item '>
                        <img className='admin__aside--icon' src={server} alt="server" />
                        <p className='admin__aside--text'>Home</p>
                    </Link>
                    <Link ref={addElem} to={'/admin/add'} className='admin__aside--item'>
                        <img className='admin__aside--icon' src={plus_icon} alt="plus_icon" />
                        <p className='admin__aside--text'>Add</p>
                    </Link>
                    <Link ref={messageElem} to={'/admin/message'} className='admin__aside--item'>
                        <img className='admin__aside--icon' src={plus_icon} alt="plus_icon" />
                        <p className='admin__aside--text'>Messages</p>
                    </Link>
                </div>
            </div>
            <button onClick={leaveAdmin} className='admin__aside--exit'>
                <img className='admin__aside--icon' src={power} alt="power" />
                <p className='admin__aside--text'>exit</p>
            </button>
        </div>
    )
}

export default AdminAside