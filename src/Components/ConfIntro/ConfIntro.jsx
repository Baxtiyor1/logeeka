import React from 'react'

import './ConfIntro.scss'

function ConfIntro() {
  return (
    <>
      <section className='cintro'>
        <div className="container">
          <div className="cintro__wrapper">
            <h1 className='cintro__title'>Conference</h1>
          </div>
        </div>
      </section>
      <div className='container cintro__banner'>
        <a href="/" className='cintro__link' target={"_blank"}>
          <img className='cintro__img' src="https://picsum.photos/600/200" alt="someimg" />
        </a>
      </div>
    </>
  )
}

export default ConfIntro