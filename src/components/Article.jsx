import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import ArticleDataService from '../services/article.services';

function Article() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const data = await ArticleDataService.getAllArticles();
    console.log(data.docs);
    setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    <>
      <Menu />

      <div className="Wrapper">
        <div className="ArticleItem">
          {articles.map((article) => (
            <div key={article.id} className="ArticleContainer">
              <Link to={article.id} className="ArticleLink">
                <img
                  src={article.imageUrl}
                  alt="Generic placeholder"
                  className="ArticleImg"
                />
                <div className="ArticleTitle">{article.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Article;
