import axios from 'axios';

//SASS
import './JournalForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'
import file_icon from '../../../Assets/img/file_upload.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function JournalForm() {
    let currentTime = new Date().toISOString()

    function JournalValues(e) {
        e.preventDefault()
        const { journalFile, journalImage, journalTitle, journalTime } = e.target.elements
        const data = {
            image: journalImage.value,
            pdf_file: journalFile.value,
            title: journalTitle.value,
            date: journalTime.value
        }
        console.log(data);
        // axios.post('https://logeeka-mini-app.herokuapp.com/journal', data, {
        //     headers: {
        //         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
        //     }
        // }).then(res => console.log(res))
    }
    return (
        <>
            <div className="admin">
                <div className="admin__wrapper">
                    <AdminAside />
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
                            <form onSubmit={JournalValues} className="journal__form" encType="multipart/form-data">
                                <label className='journal__form--label'>
                                    upload Img :
                                    <div className='journal__form--box'>
                                        <p className='journal__form--text'>Img</p>
                                        <img className='journal__icon' src={file_icon} alt="file_icon" />
                                    </div>
                                    <input name='journalImage' className='journal__form--fileInput' type="file" accept="image/*" />
                                </label>
                                <label className='journal__form--label'>
                                    data:
                                    <input name='journalTime' className='journal__form--time'
                                        type="datetime-local" min={currentTime.split('').splice(0, 16).join('')} />
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
                                    <input name='journalFile' className='journal__form--fileInput' type="file" accept='application/pdf' />
                                </label>
                                <button className='journal__form--btn' type='submit'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JournalForm