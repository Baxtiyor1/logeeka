import { useState } from 'react';
import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './PartnerForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'
import file_icon from '../../../Assets/img/file_upload.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function PartnerForm() {
    document.title = 'Admin Certificate Form'

    let [token] = useToken()
    let [selectImage, setSelectImage] = useState('')

    const handleSelectImage = e => {
        setSelectImage(e.target.value)
    }

    const newCertificate = e => {
        e.preventDefault()
        const { partner_logo, name, url } = e.target.elements
        var formData = new FormData();

        formData.append("image", partner_logo.files[0]);
        formData.append("partner_name", name.value);
        formData.append("partner_url", url.value);

        axios.post('https://logeekascience.com/api/utils/add_partner', formData, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => alert(res.data.message))
            .catch(err => alert(err.response.data.message))

        partner_logo.value = null
        name.value = null
        url.value = null
        setSelectImage('')
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
                            <form onSubmit={newCertificate} className='cert__form'>
                                <label className='conf__form--label conf__form--label-file'>
                                    upload logo: {selectImage}
                                    <div className='article__form--subbox'>
                                        <p>logo</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input onChange={handleSelectImage} className='article__form--file' name='partner_logo' type="file" accept="image/*" />
                                </label>
                                <label className='article__form--label price__form--label'>
                                    Partner name :
                                    <input name='name' className='article__form--input' type="name" placeholder='Enter partner name...' />
                                </label>
                                <label className='article__form--label price__form--label'>
                                    Partner url :
                                    <input name='url' className='article__form--input' type="name" placeholder='Enter partner url...' />
                                </label>
                                <button className='article__form--btn cert__form--btn' type='submit'>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerForm