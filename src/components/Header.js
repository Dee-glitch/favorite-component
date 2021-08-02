import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Products</Link>
          </div>
          <div>
            <Link to="/favorites">Favorites</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
