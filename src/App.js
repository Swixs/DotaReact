// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heroes from './components/Pages/Herous/Heroes';
import News from './components/Pages/News/News';
import Esports from './../src/components/Pages/Esports/Esports';
import Main from './components/Pages/Main/Main';
// import AbaddonPage from './components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage';
// import state from './redux/state';
import Layout from './components/Layout';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />
               <Route path="/heroes/" element={<Heroes />} />
               <Route path="/heroes/:hero" element={<Hero />} />
               {/* <Route path="/herro/:hero" element={<Hero />} /> */}
               <Route path="/news" element={<News />} />
               <Route path="/esports" element={<Esports />} />
               {/* <Route path="abaddon" element={<AbaddonPage state={state} />} /> */}
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
