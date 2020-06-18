import React from 'react';

import './Testimonials.scss';
import ControlledCarousel from './ControlledCarousel';

function Testimonials() {
  return (
    <>
    <section className="testimonials">
      <h3 className="testimonials__article">What our customers are saying</h3>

      <div className="carousel">
        <ControlledCarousel />
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
    </>
  );
}

export default Testimonials;
