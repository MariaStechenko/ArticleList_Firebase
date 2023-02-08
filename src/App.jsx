import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SingleArticle from './components/SingleArticle';
import Article from './components/Article';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Article />} />
            <Route path="/:id" element={<SingleArticle />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
