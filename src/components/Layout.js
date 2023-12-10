import React from 'react';
import HeaderLine from './Header/HeaderLine';

const Layout = ({ children }) => {
   return (
      <div>
         <HeaderLine />
         {children}
      </div>
   );
};

export default Layout;
