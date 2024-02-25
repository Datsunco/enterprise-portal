// Layout.js
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    {/* Если нужно, можно добавить Footer тут */}
  </div>
);

export default Layout;