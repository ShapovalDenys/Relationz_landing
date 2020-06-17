import React from 'react';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
      <ul>
        <li className="footer__nav-item">
          <a className="footer__nav-link-main" href="/">Relationz</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Product Tour</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Pricing</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Founding Members</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Case Studies</a>
        </li>
      </ul>
      <ul>
        <li className="footer__nav-item">
          <a className="footer__nav-link-main" href="/">Company</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Blog</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Career</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Privacy</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">About</a>
        </li>
      </ul>
      <ul>
        <li className="footer__nav-item">
          <a className="footer__nav-link-main" href="/">Support</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Documentation</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Security</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Mobility Guide</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">FAQs</a>
        </li>
      </ul>
      <ul>
        <li className="footer__nav-item">
          <a className="footer__nav-link-main" href="/">Legal</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Terms of Service</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Privacy Policy</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">Cookie Information</a>
        </li>
        <li className="footer__nav-item">
          <a className="footer__nav-link" href="/">GDPR Commitment</a>
        </li>
      </ul>
      </nav>
      <h3 className="footer__article">Relationz</h3>
      <p className="footer__copyright">Copyright © 2010 - 2019 Relationz Ltd. All rights reserved.</p>
      <div className="footer__decoration"><div></div></div>
    </footer>
  );
}

export default Footer;
