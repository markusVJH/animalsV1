import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="navlink" activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" className="navlink" activeclassname='active'>
              Animals ({props.animalsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds" className="navlink" activeclassname='active'>
              Birds ({props.birdsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navlink" activeclassname='active'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;