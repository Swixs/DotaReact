import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heroes from './components/Pages/Herous/Heroes';
import News from './components/Pages/News/News';
import Esports from './../src/components/Pages/Esports/Esports';
import Main from './components/Pages/Main/Main';
import AbaddonPage from './components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/news" element={<News />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/abaddon" element={<AbaddonPage />} />
         </Routes>
      </BrowserRouter>
   );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
