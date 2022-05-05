

//SASS
import './CertificatesForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'
import file_icon from '../../../Assets/img/file_upload.svg'
import search from '../../../Assets/img/search.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function CertificateForm() {
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
                            <form className='cert__form'>
                                <label className='conf__form--label conf__form--label-file'>
                                    upload Img
                                    <div className='article__form--subbox'>
                                        <p>user</p>
                                        <img src={file_icon} alt="file_icon" />
                                    </div>
                                    <input className='article__form--file' name='certImg' type="file" accept="image/*" />
                                </label>
                                <label className='article__form--label price__form--label'>
                                    CCID :
                                    <input name='ccid' className='article__form--input' type="name" placeholder='type price title...' />
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

export default CertificateForm