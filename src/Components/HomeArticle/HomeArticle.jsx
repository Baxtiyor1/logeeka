import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//SASS
import "./HomeArticle.scss";

//IMAGE
import ArrowRight from "../../Assets/img/arrow-right.svg";

function HomeArticle() {
  let [articleData, setArticleData] = useState([])

  useEffect(() => {
    axios.get('https://logeekascience.com/api/posts/allArticle?limit=4')
      .then(res => setArticleData(res.data.data))
  }, [])

  return (
    <section className="harticle">
      <div className="container">
        <div className="harticle__wrapper">
          {
            articleData.length > 1 && <Link className="harticle__title" to={"/articles"}>Articles</Link>
          }
          <ul className="harticle__list">
            {
              articleData && articleData.map((e, i) => {
                let year = e.created_at.split('T')[0]
                return (
                  <Link to={'/articles/' + e.article_id} key={i} className="harticle__item">
                    <h4 className="harticle__item-title">{e.title}</h4>
                    <p className="harticle__item-name">{e.full_name}</p>
                    <div className=" harticle__item-box">
                      <span className="harticle__item-subtext">CARREERS EDITORIAL</span>
                      <span className="harticle__item-line">|</span>
                      <span className="harticle__item-date">{year}</span>
                    </div>
                  </Link>
                )
              })
            }
          </ul>
          {
            articleData.length > 1 && <Link className="more__link" to={"/articles"}>
            More...{" "}
            <img className="more__link-img" src={ArrowRight} alt="ArroowRight" />
          </Link>
          }
        </div>
      </div>
    </section>
  );
}

export default HomeArticle;
