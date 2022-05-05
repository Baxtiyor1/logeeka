import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//SASS
import './PricingMain.scss'

function PricingMain() {
    const [priceData, setPriceData] = useState()
    axios.get('https://logeeka-mini-app.herokuapp.com/price')
        .then(res => setPriceData(res.data.data))

    return (
        <section className='pricing'>
            <div className="container">
                <div className="pricing__wrapper">
                    <div className="pricing__navlink">
                        <Link className={'pricing__navlink'} to={'/'}>Home</Link>
                        <span className={'pricing__navlink'}> | </span>
                        <Link className={'pricing__navlink pricing__navlink--active'} to={'/pricing'}>Pricing</Link>
                    </div>
                    <h1 className='pricing__title'>Pricing</h1>
                    <ul className='pricing__menu'>
                        {
                            priceData && priceData.map((e, i) => (
                                <li key={i} className='pricing__item'>
                                    {/* <h2 className='pricing__subtitle'>01</h2> */}
                                    <p className='pricing__text pricing__text--main'>{e.title}</p>
                                    <div className='pricing__textbox'>
                                        <span className='pricing__text'>$</span>
                                        <span className='pricing__text pricing__text--bold'>{e.price_min}</span>
                                        <span className='pricing__text pricing__text--opacity'>/${e.price_max}</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PricingMain