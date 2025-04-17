// src/components/Layout.jsx
import Header from './Header';
import Footer from './Footer';
import CartIcon from './CartIcon';
import Cart from '../pages/Cart';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <CartIcon />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
