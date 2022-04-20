

//SASS
import './ConferenceForm.scss'
import '../AdminArticle/AdminArticle.scss'

//IMAGES
import file_icon from '../../../Assets/img/file_upload.svg'
import search from '../../../Assets/img/search.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function ConferemceForm() {
    let currentTime = new Date().toISOString()

    return (
        <>
            <div className="admin">
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
                            <AdminNav search={'delete'}/>
                            <form className='conf__form'>
                                <div className='conf__form--box'>
                                    <label className='conf__form--label'>
                                        Name:
                                        <input className='conf__form--input conf__form--name' type="text" placeholder='name surname' />
                                    </label>
                                    <label className='conf__form--label'>
                                        Name:
                                        <input className='conf__form--name conf__form--input' type="text" placeholder='name surname' />
                                    </label>
                                </div>
                                <label className='conf__form--label conf__form--label-file'>
                                    upload Img
                                    <div className='article__form--subbox'>
                                        <p>user</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input className='article__form--file' name='user_img' type="file" accept="image/*" />
                                </label>
                                <div className='conf__form--subbox'>
                                    <label className='conf__form--label'>
                                        Time:
                                        <input className='conf__form--input journal__form--time conf__form--time' 
                                    type="datetime-local" min={currentTime.split('').splice(0, 16).join('')}/>
                                    </label>
                                    <label className='conf__form--label'>
                                        Phone:
                                        <input className='conf__form--input conf__form--time' type="tel" placeholder='+998 90 651 55 55' />
                                    </label>
                                    <label className='conf__form--label'>
                                        location:
                                        <input className='conf__form--input conf__form--time' type="text" placeholder='www.' />
                                    </label>
                                </div>
                                <label className='conf__form--label conf__form--label-file'>
                                    upload Img
                                    <div className='article__form--subbox'>
                                        <p>card</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input className='article__form--file' name='user_img' type="file" accept="image/*" />
                                </label>
                                <label className='conf__form--label'>
                                    nomi:
                                    <textarea className='conf__form--input conf__form--textarea' name="nomi" placeholder='Поиск пользователя...' />
                                </label>
                                <label className='conf__form--label'>
                                    ma'lumot:
                                    <textarea className='conf__form--input conf__form--subtextarea' name="nomi" placeholder='Поиск пользователя...' />
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