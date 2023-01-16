import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { db } from '../firebase';
import { query, onSnapshot, collection } from 'firebase/firestore';

//import articles from '../data/articles';

const q = query(collection(db, 'articlelist-1e55a'));

function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setArticles(
        snapshot.doc.map((doc) => ({
          id: doc.id,
          title: doc.title(),
          description: doc.description(),
          img: doc.imageUrl,
        }))
      );
    });
  }, []);

  return (
    <>
      <Menu />

      <div className="Wrapper">
        <div className="ArticleItem">
          {articles.map((article) => (
            <div key={article.id} className="ArticleContainer">
              <Link to={article.id.toString()} className="ArticleLink">
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
