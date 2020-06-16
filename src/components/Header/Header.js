import React from 'react';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <h1 className="header__article">Relationz</h1>
        <div className="header__decoration decoration"><div /></div>
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
