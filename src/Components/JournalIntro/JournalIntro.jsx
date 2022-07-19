import React from 'react'

import './JournalIntro.scss'

function JournalIntro() {
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
      <div className='container jintro__banner'>
        <a href="/" className='jintro__link'>
          <img className='jintro__img' src="https://picsum.photos/600/200" alt="someimg" />
        </a>
      </div>
    </>
  )
}

export default JournalIntro