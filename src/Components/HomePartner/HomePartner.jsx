import { useState } from 'react';
import axios from 'axios';

//SASS
import './HomePartner.scss'


function HomePartner() {
    let [partnerData, setPartnerData] = useState()

    useState(() => {
        axios.get('https://logeekascience.com/api/utils/get_partner?limit=100')
            .then(req => setPartnerData(req.data.data))
            .catch(err => console.log(err.req.data.message))
    }, [])


    return (
        <section className='homePartner'>
            <div className="container">
                <h3 className='homePartner__title'>Our partners</h3>
                <ul className='homePartner__list'>
                    {
                        partnerData && partnerData.map((e, i) => (
                            <li key={i} className='homePartner__item'>
                                <a href={e.partner_url} target="_blank" rel="noreferrer">
                                    <img className='homePartner__img' src={'https://logeekascience.com/api' + e.partner_image} alt={e.partner_name} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default HomePartner