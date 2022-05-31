import React, { useState } from 'react'
import axios from 'axios';

import './ArticleIntro.scss'
import Lupa from '../../Assets/img/searchArticle.svg';

function ArticleIntro(props) {
  const [articleData, setArticleData] = useState()

  function articleSearch(e) {
    e.preventDefault()
    const { articleName } = e.target.elements
    props.setSearch(articleName.value)
  }
  
  return (
    <section className='artintro'>
      <div className="container">
        <div className="artintro__wrapper">
          <h1 className='artintro__title'>Articles</h1>
          <form className='artintro__form' onSubmit={articleSearch}>
            <div className='artintro__box'>
              <img className='artintro__icon' src={Lupa} alt="lupa" />
              <input name='articleName' className='artintro__input' type="search" placeholder='Search' />
            </div>
            <button className='artintro__btn' type='submit'>Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ArticleIntro