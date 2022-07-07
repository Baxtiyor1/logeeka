import axios from 'axios'
import useToken from '../../../Hook/useToken'

//sass
import './AdminMessage.scss'

//components
import AdminAside from '../AdminAside/AdminAside'
import { useEffect, useState } from 'react'

function AdminMessage() {
    let [token] = useToken()
    let [messageData, setMassageData] = useState()
    let [deleted, setDeleted] = useState()

    useEffect(() => {
        axios.get("https://logeekascience.com/api/messages?limit=1000", {
            headers: { token }
        }).then(res => setMassageData(res.data.data))
            .catch(err => err.response && alert(err.response.data.message))
    }, [token, deleted])

    const deleteMessage = e => {
        e.preventDefault()
        let id = e.target.dataset.id

        if (id) {
            axios.delete(`https://logeekascience.com/api/messages?message_id=${id}`, {
                headers: { token }
            }).then(res => setDeleted(res.data.data))
                .catch(err => err.response && alert(err.response.data.message))
        }
    }
    return (
        <>
            <section className='admin'>
                <div className="admin__wrapper">
                    <AdminAside active={'message'} />
                    <div className="admin__bside">
                        <ul className='amessage__list'>
                            {
                                messageData && messageData.map((e, i) => {
                                    let data = e.send_data.split("T")[0]
                                    return (
                                        <li key={i} className='amessage__item'>
                                            <div className='amessage__box'>
                                                <p className='amessage__text'>User: {e.full_name}</p>
                                                <p className='amessage__text'>Email: {e.email}</p>
                                                <p className='amessage__text'>Phone: {e.phone}</p>
                                                <p className='amessage__text'>Date: {data}</p>
                                                <button onClick={deleteMessage} className='amessage__del' data-id={e.message_id}>Delete</button>
                                            </div>
                                            <p className='amessage__desc'>{e.message_text}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminMessage