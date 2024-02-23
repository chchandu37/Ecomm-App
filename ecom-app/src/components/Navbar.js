// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from '../styles';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <S.NavbarContainer>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/create" style={{ color: 'white', textDecoration: 'none' }}>
        Create Product
      </Link>
      <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
        Cart ({cartCount})
      </Link>
    </S.NavbarContainer>
  );
};

export default Navbar;
