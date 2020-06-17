import React from 'react';

import './Testimonials.scss';

function Testimonials() {
  return (
    <section className="testimonials">
      <h3 className="testimonials__article">What our customers are saying</h3>
      <div className="testimonials__wrap">
        <img
          className="testimonials__user-picture"
          src="./img/testimonials-user-1.png"
          alt="testimonials-user"
        />
        <h4>Michelle Johnson, Australia</h4>
        <div className="testimonials__dots">
          <img src="./img/testimonials-dots.svg" alt="testimonials-dots" />
          <img src="./img/testimonials-dots.svg" alt="testimonials-dots" />
        </div>
        <p>
          The multichannel sales engagement platform which automates
          personal email outreach, calls, and tasks, while Sales can
          focus on what really matters - closing while Sales can
          focus on what really matters - closing
        </p>
        <img src="./img/testimonials-user-1-sign.svg" alt="testimonials-dots" />
        <div className="try-it__decor-text testimonials__decor">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <img
        className="testimonials__background-1 background"
        src="./img/testimonials-background-user-1.png"
        alt="testimonials-background-user"
      />
      <img
        className="testimonials__background-2 background"
        src="./img/testimonials-background-user-2.png"
        alt="testimonials-background-user"
      />
      <img
        className="testimonials__background-3 background"
        src="./img/testimonials-background-user-3.png"
        alt="testimonials-background-user"
      />
      <img
        className="testimonials__background-4 background"
        src="./img/testimonials-background-user-4.png"
        alt="testimonials-background-user"
      />
      <img
        className="testimonials__background-5 background"
        src="./img/testimonials-background-user-5.png"
        alt="testimonials-background-user"
      />
      <img
        className="testimonials__background-6 background"
        src="./img/testimonials-background-user-6.png"
        alt="testimonials-background-user"
      />
      <div className="testimonials__wrap-try">
        <div className="testimonials__wrap-try-decoration"><div /></div>
        <h4>
          Form better relationships with everyone
          <br />
          <span>Start your free 14 days trial.</span>
        </h4>
        <button
          className="testimonials__wrap-try-button"
          type="submit"
        >
          Try it for free
        </button>
      </div>
    </section>
  );
}

export default Testimonials;
