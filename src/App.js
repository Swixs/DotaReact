import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heroes from './components/Pages/Herous/Heroes';
import News from './components/Pages/News/News';
import Esports from './components/Pages/Esports/Esports';
import Main from './components/Pages/Main/Main';
import HeaderLine from './components/Header/HeaderLine';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderLine />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/news" element={<News />} />
        <Route path="/esports" element={<Esports />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;