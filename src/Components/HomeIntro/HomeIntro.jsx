import axios from 'axios'
import { useEffect, useState } from 'react'

//SASS
import './HomeIntro.scss'

function HomeIntro() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://logeekascience.com/api/background")
            .then(res => setData(res.data.data.filter(e => e.image_id === 1 || e.image_id === 2)))
            .catch(err => alert(err.message))
    }, [])

    return (
        <>
            <section className="intro">
                <div className="container">
                    <div className="intro__wrapper">
                        <h1 className='intro__title'>Logeeka Science</h1>
                        <h2 className='intro__subtitle'>International scientific journal</h2>
                    </div>
                </div>
            </section>
            {
                data.length >= 1 && <div className='container'>
                    <div className='intro__banner'>
                        {
                            data && data.map((e, i) => (
                                    <a key={i} href={e.url} className='intro__link'>
                                        <img className='intro__img' src={"https://logeekascience.com/api" + e.image_url} alt="banner image" />
                                    </a>
                            ))
                        }
                    </div>
                </div>
            }

        </>
    )
}

export default HomeIntro