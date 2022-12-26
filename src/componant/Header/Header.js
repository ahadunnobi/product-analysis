import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './header.css'
import { GiHamburgerMenu, } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';


const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to='/review'
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                REVIEW
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dashboard"
                className="nav-links active"
                onClick={click ? handleClick : null}
              >
                DASHBOARD
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                className="nav-links active"
               onClick={click ? handleClick : null}
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links active"
               onClick={click ? handleClick : null}
              >
               ABOUT
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
           <div>{click ? <RxCross2 /> : <GiHamburgerMenu />}</div>
          </div>
        </div>
      </nav>
    </ div>
  );
};

export default Header;
