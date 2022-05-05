

//SASS
import './PriceForm.scss'

//IMAGES
import Logo from '../../../Assets/img/logo.svg'

//COMPONENTS
import AdminAside from '../AdminAside/AdminAside'
import AdminNav from '../AdminNav/AdminNav'

function PriceForm() {
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
                            <AdminNav route={'add'}/>
                            <form className='article__form price__form'>
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