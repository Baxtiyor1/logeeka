import { useState } from 'react';
import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './JournalForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'
import file_icon from '../../../Assets/img/file_upload.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function JournalForm() {
    document.title = 'Admin Journal Form'

    let [selectPhoto, setSelectPhoto] = useState('')
    let [selectFile, setSelectFile] = useState('')
    let [token] = useToken()

    const handleSelectPhoto = evt => {
        setSelectPhoto(evt.target.value)
    }

    const handleSelectFile = evt => {
        setSelectFile(evt.target.value)
    }

    let currentTime = new Date().toISOString()

    function JournalValues(e) {
        e.preventDefault()
        let { journalFile, journalImage, journalTitle, journalTime } = e.target.elements
        var formData = new FormData();

        formData.append("image", journalImage.files[0]);
        formData.append("pdf_file", journalFile.files[0]);
        formData.append("title", journalTitle.value);
        formData.append("date", journalTime.value);

        axios.post('https://logeekascience.com/api/journal', formData, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => alert(res.data.message && 'Journal is added succesfuly'))
            .catch(err => alert(err.response.data.message))

        journalImage.value = null
        journalFile = null
        journalTitle = null
        journalTime = null
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
                            <form onSubmit={JournalValues} className="journal__form" encType="multipart/form-data">
                                <label className='journal__form--label journal__form--file'>upload Img : {selectPhoto}
                                    <div className='journal__form--box'>
                                        <p className='journal__form--text'>Img</p>
                                        <img className='journal__icon' src={file_icon} alt="file_icon" />
                                    </div>
                                    <input onChange={handleSelectPhoto} name='journalImage' className='journal__form--fileInput' type="file" accept="image/*" />
                                </label>
                                <label className='journal__form--label'>data:
                                    <input name='journalTime' className='journal__form--time'
                                        type="datetime-local" min={currentTime.split('').splice(0, 16).join('')} />
                                </label>
                                <label className='journal__form--label'>Title name:
                                    <textarea className='journal__form--textarea' name="journalTitle" placeholder='Type journal name...' />
                                </label>
                                <label className='journal__form--label journal__form--file'>Upload file: {selectFile}
                                    <div className='journal__form--box'>
                                        <p className='journal__form--text'>pdf</p>
                                        <img className='journal__icon' src={file_icon} alt="file_icon" />
                                    </div>
                                    <input onChange={handleSelectFile} name='journalFile' className='journal__form--fileInput' type="file" accept='application/pdf' />
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