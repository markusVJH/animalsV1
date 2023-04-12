import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link" activeclassname='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" className="link" activeclassname='active'>
              Animals ({props.animalsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/birds" className="link" activeclassname='active'>
              Birds ({props.birdsCount})
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="link" activeclassname='active'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;