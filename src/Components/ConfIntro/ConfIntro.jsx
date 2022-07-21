import { useState, useEffect } from 'react'
import axios from 'axios'

//SASS
import './ConfIntro.scss'

function ConfIntro() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("https://logeekascience.com/api/background")
      .then(res => setData(res.data.data.filter(e => e.image_id === 4)))
      .catch(err => alert(err.message))
  }, [])
  return (
    <>
      <section className='cintro'>
        <div className="container">
          <div className="cintro__wrapper">
            <h1 className='cintro__title'>Conference</h1>
          </div>
        </div>
      </section>
      {
        data.length >= 1 && <div className='container cintro__banner'>
          {
            data && data.map((e, i) => (
              <a href={e.url} key={i} className='cintro__link' target={"_blank"}>
                <img className='cintro__img' src={"https://logeekascience.com/api" + e.image_url} alt="banner image" />
              </a>
            ))
          }
        </div>
      }
    </>
  )
}

export default ConfIntro