

//SASS
import './JournalForm.scss'

//IMAGES
import search from '../../../Assets/img/search.svg'
import file_icon from '../../../Assets/img/file_upload.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function JournalForm() {
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
                            <div className="journal__form">
                                <label className='journal__form--label'>
                                    upload Img :
                                    <div className='journal__form--box'>
                                        <p className='journal__form--text'>Img</p>
                                        <img className='journal__icon' src={file_icon} alt="file_icon" />
                                    </div>
                                    <input className='journal__form--fileInput' type="file" accept="image/*" />
                                </label>
                                <label className='journal__form--label'>
                                    data:
                                    <input className='journal__form--time' 
                                    type="datetime-local" min={currentTime.split('').splice(0, 16).join('')}/>
                                </label>
                                <label className='journal__form--label'>
                                    Title name:
                                    <textarea className='journal__form--textarea' name="journalTitle" placeholder='Type journal name...' />
                                </label>
                                <label className='journal__form--label'>
                                    Upload file:
                                    <div className='journal__form--box'>
                                        <p className='journal__form--text'>pdf</p>
                                        <img className='journal__icon' src={file_icon} alt="file_icon" />
                                    </div>
                                    <input className='journal__form--fileInput' type="file" accept='application/pdf'/>
                                </label>
                                <button className='journal__form--btn'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JournalForm