import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="tag">TokoTechBil</h1>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
