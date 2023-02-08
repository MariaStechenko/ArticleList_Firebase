import { db } from '../firebase';

import 'firebase/firestore';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';

const articleCollectionRef = collection(db, 'articles');
class ArticleDataService {
  getAllArticles = () => {
    return getDocs(articleCollectionRef);
  };

  getArticle = (id) => {
    const articleDoc = doc(db, 'articles', id);
    return getDoc(articleDoc);
  };
}

export default new ArticleDataService();
