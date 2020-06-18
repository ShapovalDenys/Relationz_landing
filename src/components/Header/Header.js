import React, { useState } from 'react';

import './Header.scss';
import './hamburgers.css';

function Header() {
const [isActiveMenu, setIsActiveMenu] = useState(false)

  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__article">Relationz</h1>

        <div className={isActiveMenu ? "mobile mobile__active" : "mobile"}>
          <ul>
            <li>
              <a className="mobile__nav-link" href="/">Services</a>
            </li>
            <li>
              <a className="mobile__nav-link" href="/">Enterprise</a>
            </li>
            <li>
              <a className="mobile__nav-link" href="/">Pricing</a>
            </li>
            <li>
              <a className="mobile__nav-link" href="/">Login</a>
            </li>
            <li><a className="mobile__nav-link-active" href="/">Try it for free</a></li>
            </ul>
          </div>

        <div className="header__decoration decoration"><div /></div>

        <div className="mobile__menu">
          <button
            className={isActiveMenu ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse"}
            type="button"
            onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="/">Services</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="/">Enterprise</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="/">Pricing</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="/">Login</a>
            </li>
            <li className="header__nav-item header__nav-item-active">
              <a
                className="header__nav-link header__nav-link-active"
                href="/"
              >
                Try it for free
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
