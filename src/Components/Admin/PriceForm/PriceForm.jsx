import axios from 'axios';
import useToken from '../../../Hook/useToken'

//SASS
import './PriceForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function PriceForm() {
    let [token] = useToken()

    const newPrice = e => {
        e.preventDefault()
        const { priceTitle, oldPrice, newPrice } = e.target.elements
        var formData = new FormData();

        if(newPrice.value && oldPrice.value && priceTitle.value.length > 5){
            formData.append("price_min", newPrice.value);
            formData.append("price_max", oldPrice.value);
            formData.append("title", priceTitle.value);
    
            axios.post('https://logeekascience.com/api/price', formData, {
                headers: {
                    token: token,
                    "type": "formData",
                    "Content-Type": "form-data",
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(res => alert(res.data.message))
                .catch(err => console.log(err))
    
            priceTitle.value = null
            oldPrice.value = null
            newPrice.value = null
        }
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
                            <form onSubmit={newPrice} className='article__form price__form'>
                                <label className='article__form--label price__form--label'>
                                    Title:
                                    <input name='priceTitle' className='article__form--input price__form--input' type="text" placeholder='type price title...' />
                                </label>
                                <label className='article__form--label price__form--label'>
                                    Old price:
                                    <input name='oldPrice' className='article__form--input price__form--input' type="number" placeholder='type old price' />
                                </label>
                                <label className='article__form--label price__form--label'>
                                    New price:
                                    <input name='newPrice' className='article__form--input price__form--input' type="number" placeholder='type new price' />
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

export default PriceForm