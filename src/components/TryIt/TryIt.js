import React from 'react';

import './TryIt.scss';

function TryIt() {
  return (
    <section className="try-it">
      <div className="try-it__wrap">
        <div className="try-it__description">
          <div className="try-it__decor-text">
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
          <h2>Take your relationships to the next level</h2>
          <p>
            The multichannel sales engagement platform which
            automates personal email outreach, calls, and tasks,
            while Sales can focus on what really matters - closing deals.
          </p>
          <form method="POST" action="#" className="try-it__form">
            <input
              type="email"
              name="email"
              placeholder="Email id"
              className="try-it__input"
              maxLength={40}
              required
            />
            <button
              type="submit"
              className="try-it__button"
            >
              Try it for free
            </button>
          </form>
          <span className="try-it__mark">
            <img src="./img/check-mark.svg" alt="mark" />
            Synced contacts
          </span>
          <span className="try-it__mark">
            <img src="./img/check-mark.svg" alt="mark" />
            Regular reminders
          </span>
          <span className="try-it__mark">
            <img src="./img/check-mark.svg" alt="mark" />
            The multichannel
          </span>
        </div>
        <div className="try-it__picture">
          <img src="./img/header-img.png" alt="header smartfone" />
        </div>
      </div>
      <div className="decoration try-it__decoration"><div /></div>
      <div className="decoration try-it__decoration-1"><div /></div>
    </section>
  );
}

export default TryIt;
