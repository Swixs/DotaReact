import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Heroes from './components/Pages/Herous/Heroes';
import News from './components/Pages/News/News';
import Esports from './../src/components/Pages/Esports/Esports';
import Main from './components/Pages/Main/Main';
import AbaddonPage from './components/Pages/PagesInfoHeroes/AbaddonPage/AbaddonPage';

const App = () => {
   const posts = [
      {
         id: 1,
         imageUrl:
            'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_universal.png',
         name: 'Abaddon',
         textAtr: 'Universal',
         number: 102,
         subtitle: 'SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS',
         firstChapterHistory: `The Font of Avernus is the source of a family's strength, a crack in 
         primal stones from which vapors of prophetic power have issued for generations. Each 
         newborn of the cavernous House Avernus is bathed in the black mist, and by this baptism 
         they are given an innate connection to the mystic energies of the land. They grow up 
         believing themselves fierce protectors of their lineal traditions, the customs of the 
         realm--but what they really are protecting is the Font itself. And the motives of the 
         mist are unclear.`,
      },
   ];
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/news" element={<News />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/abaddon" element={<AbaddonPage posts={posts} />} />
         </Routes>
      </BrowserRouter>
   );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
