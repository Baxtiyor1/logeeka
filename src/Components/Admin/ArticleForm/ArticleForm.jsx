import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './ArticleForm.scss'
import './ArticleCat.scss'

//IMAGES
import file_icon from '../../../Assets/img/file_upload.svg'
import Logo from '../../../Assets/img/logo.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function ArticleForm() {
    document.title = 'Admin Article Form'

    let [token] = useToken()
    const [categoryData, setCategoryData] = useState([])
    let [selectFile, setSelectFile] = useState()
    let catModal = useRef()
    let catList = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/category')
            .then(res => setCategoryData(res.data.data))
            .catch(err => alert(err.response.data.message))
    }, [token])

    const handleFileSelect = e => {
        setSelectFile(e.target.value)
    }

    function articleValues(e) {
        e.preventDefault()
        const { category, name, profession, title, keyword, anastasiya, file } = e.target.elements
        let formData = new FormData();

        formData.append("category_id", category.value);
        formData.append("profession", profession.value);
        formData.append("full_name", name.value);
        formData.append("title", title.value);
        formData.append("keyword", keyword.value);
        formData.append("annastatsiya", anastasiya.value);
        formData.append("files", file.files[0]);

        axios.post('https://logeekascience.com/api/posts/article', formData, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => alert(res.data.message))
            .catch(err => alert(err.response.data.message))

        category.value = null
        name.value = null
        profession.value = null
        title.value = null
        keyword.value = null
        anastasiya.value = null
        file.value = null
    }

    const openCatlist = e => {
        catList.current && catList.current.classList.toggle('acat__wrapper--active')
    }

    const openCatModal = e => {
        catModal.current && catModal.current.classList.toggle('acat__modal--active')
    }

    const closeCatModal = e => {
        catModal.current && catModal.current.classList.remove('acat__modal--active')
    }

    const addCategory = e => {
        e.preventDefault()
        const { category } = e.target.elements

        if (category.value.length <= 1) alert("Category name must be more than 1 characters")

        if (category.value.length > 1) {
            let formData = new FormData();

            formData.append("category_name", category.value.trim());

            axios.post("https://logeekascience.com/api/category", formData, {
                headers: {
                    token: token,
                    "type": "formData",
                    "Content-Type": "form-data",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(res => { alert(res.data.message) })
                .catch(err => alert(err.message))

            category.value = null
        }
    }

    const deleteCategory = e => {
        e.preventDefault()
        let id = e.target.dataset.id

        axios.delete(`https://logeekascience.com/api/category/${id}`, {
            headers: {
                token: token,
                "type": "formData",
                "Content-Type": "form-data",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(res => alert("Category " + res.data.message + " deleted"))
            .catch(err => err.response && err.response.data.message && alert("You must first delete the article belong to this category"));
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
                            <div>
                                <button onClick={openCatlist} className='acat__open'>Add new category</button>
                                <button onClick={openCatModal} className='acat__open'>All categories</button>
                            </div>
                            <div ref={catList} className='acat__wrapper'>
                                <form className='acat__form' onSubmit={addCategory}>
                                    <label className='article__form--label'>
                                        Add new Category
                                        <input name="category" className='article__form--input' type="text" placeholder='Enter Category name' />
                                    </label>
                                    <button className='acat__btn' type='submit'>Save Category</button>
                                </form>
                            </div>
                            <div ref={catModal} className='acat__modal'>
                                <button onClick={closeCatModal} className='acat__modal--close'>X</button>
                                <ul className='acat__list'>
                                    {
                                        categoryData && categoryData.map((e, i) => (
                                            <li key={i} className='acat__item'>
                                                <p className='acat__text'>{e.category_name}</p>
                                                <button onClick={deleteCategory} data-id={e.category_id} className='acat__del'>Delete</button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className='article__wrapper'>
                                <form onSubmit={articleValues} className='article__form' method='multipart/form-data'>
                                    <label className='article__form--label'>
                                        Category:
                                        <select name="category" className='article__form--input' defaultValue='category'>
                                            <option value="category" className='article__form--option' disabled>Choose Category</option>
                                            {
                                                categoryData && categoryData.map((e, i) => {
                                                    return (
                                                        <option key={i} className='article__form--option' value={e.category_id}>{e.category_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </label>
                                    <div className='article__form--box'>
                                        <label className='article__form--label'>
                                            Name:
                                            <input name='name' className='article__form--input' type="text" placeholder='name surname' />
                                        </label>
                                        <label className='article__form--label'>
                                            profession:
                                            <input name='profession' className='article__form--input' type="text" placeholder='profession' />
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
                                        <textarea name="anastasiya" className='article__form--area article__form--keyword' placeholder='Type title' />
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

export default ArticleForm