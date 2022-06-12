import { useState } from 'react';
import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './ConferenceForm.scss'
import '../AdminArticle/AdminArticle.scss'

//IMAGES
import file_icon from '../../../Assets/img/file_upload.svg'
import Logo from '../../../Assets/img/logo.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function ConferemceForm() {
    document.title = 'Admin Conference Form'

    let currentTime = new Date().toISOString()
    let [token] = useToken()
    let [selectUserImg, setSelectUserImg] = useState()
    let [selectCardImg, setSelectCardImg] = useState()

    const handleUserImg = e => {
        setSelectUserImg(e.target.value)
    }

    const handleCardImg = e => {
        setSelectCardImg(e.target.value)
    }

    const newConference = e => {
        e.preventDefault()
        const { username, profession, user_img, time, phone, location, card_img, title, info } = e.target.elements
        var formData = new FormData();

        formData.append("author", username.value);
        formData.append("profession", profession.value);
        formData.append("image_user", user_img.files[0]);
        formData.append("phone", phone.value);
        formData.append("location", location.value);
        formData.append("image", card_img.files[0]);
        formData.append("title", title.value);
        formData.append("date", time.value);
        formData.append("info", info.value);
        console.log(formData);

        axios.post('https://logeekascience.com/api/conference', formData, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => alert(res.data.message))
            .catch(err => alert(err.response.data.message))

        username.value = null
        profession.value = null
        user_img.value = null
        time.value = null
        phone.value = null
        location.value = null
        card_img.value = null
        title.value = null
        info.value = null
        setSelectUserImg('')
        setSelectCardImg('')
    }
    return (
        <>
            <div className="admin">
                <div className="admin__wrapper">
                    <AdminAside active={'add'}/>
                    <div className="admin__bside">
                        <div className="admin__bside--header">
                            <img className='admin__bside--header-icon' src={Logo} alt="Logo" />
                            <div className="admin__bside--header-box">
                                <img className="admin__bside--header-pic" src="http://picsum.photos/40" alt="img" />
                                <p className="admin__bside--header-text">John Doe</p>
                            </div>
                        </div>
                        <div className="admin__area">
                            <AdminNav route={'add'} />
                            <form onSubmit={newConference} className='conf__form'>
                                <div className='conf__form--box'>
                                    <label className='conf__form--label'>Name:
                                        <input name='username' className='conf__form--input conf__form--name' type="text" placeholder='name surname' />
                                    </label>
                                    <label className='conf__form--label'>Profession:
                                        <input name='profession' className='conf__form--name conf__form--input' type="text" placeholder='name surname' />
                                    </label>
                                </div>
                                <label className='conf__form--label conf__form--label-file'>User Image: {selectUserImg}
                                    <div className='article__form--subbox'>
                                        <p>user</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input onChange={handleUserImg} className='article__form--file' name='user_img' type="file" accept="image/*" />
                                </label>
                                <div className='conf__form--subbox'>
                                    <label className='conf__form--label'>Time:
                                        <input name='time' className='conf__form--input journal__form--time conf__form--time'
                                            type="datetime-local" min={currentTime.split('').splice(0, 16).join('')} />
                                    </label>
                                    <label className='conf__form--label'>Phone:
                                        <input name='phone' className='conf__form--input conf__form--time' type="tel" placeholder='+998 90 651 55 55' />
                                    </label>
                                    <label className='conf__form--label'>location:
                                        <input name='location' className='conf__form--input conf__form--time' type="text" placeholder='www.' />
                                    </label>
                                </div>
                                <label className='conf__form--label conf__form--label-file'>Card Image: {selectCardImg}
                                    <div className='article__form--subbox'>
                                        <p>card</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input onChange={handleCardImg} className='article__form--file' name='card_img' type="file" accept="image/*" />
                                </label>
                                <label className='conf__form--label'>Title :
                                    <textarea className='conf__form--input conf__form--textarea' name="title" placeholder='Поиск пользователя...' />
                                </label>
                                <label className='conf__form--label'>Info :
                                    <textarea className='conf__form--input conf__form--subtextarea' name="info" placeholder='Поиск пользователя...' />
                                </label>
                                <button className='article__form--btn' type='submit'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConferemceForm