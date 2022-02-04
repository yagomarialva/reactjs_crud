import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="jumbotron jumbotron-fluid bg-info text-white text-center">
        <div className="container">
          <h1 className="display-4">ReactJS CRUD - Pacients</h1>
          <div className="links">
            <NavLink to="/" className="link" activeClassName="active" exact>
              pacients List
            </NavLink>
            <NavLink to="/add" className="link" activeClassName="active">
              Add pacient
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;