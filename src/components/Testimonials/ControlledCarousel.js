import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        <div className="testimonials__wraper">
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
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials__wraper">
        <div className="testimonials__wrap">
        <img
          className="testimonials__user-picture"
          src="./img/testimonials-user-2.png"
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
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials__wraper">
        <div className="testimonials__wrap">
        <img
          className="testimonials__user-picture"
          src="./img/testimonials-user-3.png"
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
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials__wraper">
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
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="testimonials__wraper">
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
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
