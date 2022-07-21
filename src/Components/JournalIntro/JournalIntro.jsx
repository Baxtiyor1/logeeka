import { useState, useEffect } from 'react'
import axios from 'axios'

import './JournalIntro.scss'

function JournalIntro() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://logeekascience.com/api/background")
      .then(res => setData(res.data.data.filter(e => e.image_id === 3)))
      .catch(err => alert(err.message))
  }, [])

  return (
    <>
      <section className='jintro'>
        <div className="effect">
          <div className="container">
            <div className="jintro__wrapper">
              <h1 className='jintro__title'>Logeeka Science</h1>
              <h2 className='jintro__subtitle'>International scientific journal</h2>
            </div>
          </div>
        </div>
      </section>
      {
        data.length >= 1 && <div className='container jintro__banner'>
          {
            data && data.map((e, i) => (
              <a key={i} href={e.url} className='jintro__link'>
                <img className='jintro__img' src={"https://logeekascience.com/api" + e.image_url} alt="banner image" />
              </a>
            ))
          }
        </div>
      }
    </>
  )
}

export default JournalIntro