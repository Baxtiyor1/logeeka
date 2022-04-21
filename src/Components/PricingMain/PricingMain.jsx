import React from 'react'
import { Link } from 'react-router-dom'
import './PricingMain.scss'

function PricingMain() {
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
                    <li className='pricing__item'>
                        <h2 className='pricing__subtitle'>01</h2>
                        <p className='pricing__text pricing__text--main'>Publishing scientific articles in international journals</p>
                        <div className='pricing__textbox'>
                            <span className='pricing__text'>$</span>
                            <span className='pricing__text pricing__text--bold'>25</span>
                            <span className='pricing__text pricing__text--opacity'>/$450</span>
                        </div>
                    </li>
                    <li className='pricing__item'>
                        <h2 className='pricing__subtitle'>02</h2>
                        <p className='pricing__text pricing__text--main'>Publishing scientific articles in international journals</p>
                        <div className='pricing__textbox'>
                            <span className='pricing__text'>$</span>
                            <span className='pricing__text pricing__text--bold'>25</span>
                            <span className='pricing__text pricing__text--opacity'>/$450</span>
                        </div>
                    </li>
                    <li className='pricing__item'>
                        <h2 className='pricing__subtitle'>03</h2>
                        <p className='pricing__text pricing__text--main'>Publishing scientific articles in international journals</p>
                        <div className='pricing__textbox'>
                            <span className='pricing__text'>$</span>
                            <span className='pricing__text pricing__text--bold'>25</span>
                            <span className='pricing__text pricing__text--opacity'>/$450</span>
                        </div>
                    </li>
                    <li className='pricing__item'>
                        <h2 className='pricing__subtitle'>04</h2>
                        <p className='pricing__text pricing__text--main'>Publishing scientific articles in international journals</p>
                        <div className='pricing__textbox'>
                            <span className='pricing__text'>$</span>
                            <span className='pricing__text pricing__text--bold'>25</span>
                            <span className='pricing__text pricing__text--opacity'>/$450</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default PricingMain