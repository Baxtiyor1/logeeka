import { useEffect, useState } from 'react';
import axios from 'axios';

//SASS
import './ArticleForm.scss'

//IMAGES
import file_icon from '../../../Assets/img/file_upload.svg'
import Logo from '../../../Assets/img/logo.svg'
import search from '../../../Assets/img/search.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function ArticleForm() {
    const [categoryData, setCategoryData] = useState([])

    useEffect(() => {
        axios.get('https://logeeka-mini-app.herokuapp.com/category', {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then(res => setCategoryData(res.data.data))
    })

    function articleValues(e) {
        e.preventDefault()

    }

    return (
        <>
            <section className="admin">
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
                            <div className='article__wrapper'>
                                <form onSubmit={articleValues} className='article__form' method='multipart/form-data'>
                                    <label className='article__form--label'>
                                        profession:
                                        <select name="profession" className='article__form--input' defaultValue='profession'>
                                            <option value="profession" disabled>Profession</option>
                                            {
                                                categoryData && categoryData.map((e, i) => {
                                                    return (
                                                        <option key={i} className='article__form--option' value={e.category_name}>{e.category_name}</option>
                                                    )
                                                })
                                            }
                                            <option className='article__form--option' value="Kimyo">Kimyo</option>
                                        </select>
                                    </label>
                                    <div className='article__form--box'>
                                        <label className='article__form--label'>
                                            Name:
                                            <input name='name' className='article__form--input' type="text" placeholder='name surname' />
                                        </label>
                                        <label className='article__form--label'>
                                            profession:
                                            <input className='article__form--input' type="text" placeholder='profession' />
                                        </label>
                                    </div>
                                    <label className='article__form--label'>
                                        Title:
                                        <textarea name="title" className='article__form--area article__form--title' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label'>
                                        Keyword:
                                        <textarea name="keyword" className='article__form--area article__form--keyword' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label'>
                                        Аннастация:
                                        <textarea name="keyword" className='article__form--area article__form--keyword' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label'>
                                        upload pdf
                                        <div className='article__form--subbox'>
                                            <p>pdf</p>
                                            <img src={file_icon} alt="file_icon" />
                                        </div>
                                        <input className='article__form--file' type="file" placeholder='pdf' accept="image/*" />
                                    </label>
                                    <button className='article__form--btn' type='submit'>Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArticleForm