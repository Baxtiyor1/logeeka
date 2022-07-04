import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

//SASS
import './ConfCards.scss'

function ConfCards() {
    let [confData, setConfData] = useState()
    let [pageLimit, setPageLimit] = useState()
    let [pageCount, setPageCount] = useState(2)
    let show_btn = useRef()

    useEffect(() => {
        axios.get('https://logeekascience.com/api/conference?limit=6')
            .then(res => {
                setConfData(res.data.data)
                setPageLimit(Math.ceil(res.data.count_selected / 6));
            })
    }, [])

    useEffect(()=> {
        if (Number(pageLimit) <= Number(pageCount) - 1) {
          show_btn.current && show_btn.current.classList.add('confcards__btnbox--close')
        } else {
          show_btn.current && show_btn.current.classList.remove('confcards__btnbox--close')
        }
      }, [pageCount, pageLimit])

    function nextConfData(e) {
        e.preventDefault()
        let page = e.target.dataset.page
        setPageCount(page)
        if (Number(pageLimit) <= Number(page) - 1) {
            show_btn.current && show_btn.current.classList.add('confcards__btnbox--close')
        } else {
            show_btn.current && show_btn.current.classList.remove('confcards__btnbox--close')

            if (Number(pageLimit) === Number(page)) {
                show_btn.current && show_btn.current.classList.add('confcards__btnbox--close')
            }

            axios.get(`https://logeekascience.com/api/conference?page=${page}&limit=6`)
                .then(res => {
                    setConfData([...confData, ...res.data.data]);
                    setPageLimit(Math.ceil(res.data.count_selected / 6));
                })
        }

        e.target.dataset.page = Number(page) + 1
    }

    return (
        <section className='confcards'>
            <div className="container">
                <div className="confcards__wrapper">
                    <ul className='confcards__list'>
                        {
                            confData && confData.map((e, i) => {
                                let year = e.date.split('T')[0]
                                let time = e.date && e.date.split('T')[1] && e.date && e.date.split('T')[1].split('').splice(0, 5).join('')
                                return (
                                    <Link to={'/conference/' + e.conference_id} key={i} className='confcards__item'>
                                        <img className='confcards__item-img' src={'https://logeekascience.com/api' + e.image} alt="card-img" />
                                        <div className="confcards__box">
                                            <h3 className='confcards__item-title'>{e.title}</h3>
                                            <div className='confcards__item-datebox'>
                                                <span className='confcards__item-date'>{year}</span>
                                                <span className='confcards__item-line'> | </span>
                                                <span className='confcards__item-time'>{time}</span>
                                            </div>
                                            <div className='confcards__item-box'>
                                                <div className='confcards__item-subbox'>
                                                    <img className='confcards__item-avatar' src={'https://logeekascience.com/api' + e.user_image} alt="person" />
                                                    <div className='confcards__item-minbox'>
                                                        <p className='confcards__item-name'>{e.author}</p>
                                                        <p className='confcards__item-profession'>{e.profession}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                        {
                            !confData && <h2 style={{ "width": "1450px", "maxWidth": "100%", "textAlign": "center" }}>No internet connection...</h2>
                        }
                        {
                            confData && confData.length < 1  && <h2 style={{ "width": "1450px", "maxWidth": "100%", "textAlign": "center" }}>Conferences not found</h2>
                        }
                    </ul>
                    {
                        confData && <div ref={show_btn} className='confcards__btnbox'><button data-page='2' onClick={nextConfData} className='confcards__btn'>Show more</button></div>
                    }
                </div>
            </div>
        </section>
    )
}

export default ConfCards