import { useParams } from 'react-router-dom';
import Menu from './Menu';
import articles from '../data/articles';

const SingleArticle = () => {
  const params = useParams();
  const article = articles.find(
    (article) => article.id.toString() === params.id.toString()
  );
  return (
    <>
      <Menu />
      <div className="SingleArticleWrapper">
        <div className="SingleArticleContainer">
          <h2>{article.title}</h2>
          <img
            src={article.imageUrl}
            alt="Generic placeholder"
            className="SingleArticleImg"
          />

          <h3>{article.description}</h3>

          <h4>
            Expert Comment: <br /> <br />
            {article.expertComment}
          </h4>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
