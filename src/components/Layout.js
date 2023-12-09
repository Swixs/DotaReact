import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderLine from './Header/HeaderLine';

const Layout = () => {
   return (
      <div className="container">
         <HeaderLine />
         <Outlet />
      </div>
   );
};

export default Layout;
