// App.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Heroes from './Pages/Herous/Heroes';
import News from './Pages/News/News';
import Esports from './Pages/Esports/Esports';
import Main from './Pages/Main/Main';
import HeroDetails from './components/HeroDetails/HeroDetails';
import state from './redux/state';

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <Layout>
                     <Main />
                  </Layout>
               }
            />
            <Route
               path="/heroes/*"
               element={
                  <Layout>
                     <Routes>
                        <Route index element={<Heroes />} />
                     </Routes>
                  </Layout>
               }
            />
            <Route
               path="/heroes/:heroName/*"
               element={
                  <Layout>
                     <Routes>
                        <Route index element={<HeroDetails state={state} />} />
                     </Routes>
                  </Layout>
               }
            />
            <Route
               path="/news"
               element={
                  <Layout>
                     <News />
                  </Layout>
               }
            />
            <Route
               path="/esports"
               element={
                  <Layout>
                     <Esports />
                  </Layout>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

export default App;
