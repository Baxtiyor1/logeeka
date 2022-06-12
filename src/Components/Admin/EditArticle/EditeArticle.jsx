import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './EditeArticle.scss'

//IMAGES
import file_icon from '../../../Assets/img/file_upload.svg'
import Logo from '../../../Assets/img/logo.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function EditeArticle() {
    document.title = 'Admin Article Form'
    let { id: articleId } = useParams()

    let [token] = useToken()
    const [categoryData, setCategoryData] = useState([])
    let [selectFile, setSelectFile] = useState()
    const [article, setArticle] = useState([])

    //ELEMENTS  
    let nameElem = useRef()
    let categoryElem = useRef()
    let professionElem = useRef()
    let titleElem = useRef()
    let keywordElem = useRef()
    let anastasiyaElem = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/category')
            .then(res => setCategoryData(res.data.data))
            .catch(err => alert(err.response.data.message))
    }, [articleId])

    useEffect(() => {
        axios.get(`https://logeekascience.com/api/posts/article?id=${articleId}`, {
            headers: {
                token: token,
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
            .then(res => setArticle(res.data.data))
            .catch(err => alert(err.response.data.message))
    }, [articleId, token])

    useEffect(() => {
        for (let i of article) {
            nameElem.current.innerText = i.full_name
            professionElem.current.innerText = i.profession
            titleElem.current.innerText = i.title
            keywordElem.current.innerText = i.keyword
            anastasiyaElem.current.innerText = i.annastatsiya
        }
    }, [article])
    
    const handleFileSelect = e => {
        setSelectFile(e.target.value)
    }

    function articleValues(e) {
        e.preventDefault()
        const { category, name, profession, title, keyword, anastasiya, file } = e.target.elements
        var formData = new FormData();

        formData.append("article_id", articleId);
        category.value && formData.append("category_id", category.value);
        formData.append("profession", profession.value);
        formData.append("full_name", name.value);
        formData.append("title", title.value);
        formData.append("keyword", keyword.value);
        formData.append("annastatsiya", anastasiya.value);
        file.files[0] && formData.append("files", file.files[0]);

        axios.put('https://logeekascience.com/api/posts/article', formData, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => console.log(res.data.message))
            .catch(err => alert(err.response.data.message))

        category.value = null
        name.value = null
        profession.value = null
        title.value = null
        keyword.value = null
        anastasiya.value = null
        file.value = null
    }

    return (
        <>
            <section className="admin">
                <div className="admin__wrapper">
                    <AdminAside active={'add'} />
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
                                        Category:
                                        <select ref={categoryElem} name="category" className='article__form--input' defaultValue='category'>
                                            <option value="category" className='article__form--option' disabled>Choose Category</option>
                                            {
                                                categoryData && categoryData.map((e, i) => {
                                                    return (
                                                        <option key={i} className='article__form--option' value={e.category_id}>{e.category_name}</option>
                                                    )
                                                })
                                            }
                                            <option className='article__form--option' value="Kimyo">Kimyo</option>
                                        </select>
                                    </label>
                                    <div className='article__form--box'>
                                        <label className='article__form--label'>
                                            Name:
                                            <textarea ref={nameElem} name='name' className='article__form--input earticle__input' type="text" placeholder='name surname' />
                                        </label>
                                        <label className='article__form--label'>
                                            profession:
                                            <textarea ref={professionElem} name='profession' className='article__form--input earticle__input' type="text" placeholder='profession' />
                                        </label>
                                    </div>
                                    <label className='article__form--label'>
                                        Title:
                                        <textarea ref={titleElem} name="title" className='article__form--area article__form--title' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label'>
                                        Keyword:
                                        <textarea ref={keywordElem} name="keyword" className='article__form--area article__form--keyword' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label'>
                                        Аннастация:
                                        <textarea ref={anastasiyaElem} name="anastasiya" className='article__form--area article__form--keyword' placeholder='Type title' />
                                    </label>
                                    <label className='article__form--label article__form--lastlabel'>
                                        upload pdf {selectFile}
                                        <div className='article__form--subbox'>
                                            <p>pdf</p>
                                            <img src={file_icon} alt="file_icon" />
                                        </div>
                                        <input name='file' onChange={handleFileSelect} className='article__form--file' type="file" placeholder='pdf' accept=".pdf" />
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

export default EditeArticle