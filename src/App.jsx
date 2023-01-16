import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleArticle from './components/SingleArticle';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {<Route path="/" element={<Article />} />}
          {<Route path="/" element={<SingleArticle />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
