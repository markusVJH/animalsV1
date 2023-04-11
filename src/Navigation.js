import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" className="link">
              Animals ({props.animalsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds" className="link">
              Birds ({props.birdsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;