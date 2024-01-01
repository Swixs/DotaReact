import React from 'react';
import HeaderLine from './components/Header/HeaderLine';

const Layout = ({ children }) => {
   return (
      <div>
         <HeaderLine />
         {children}
      </div>
   );
};

export default Layout;
