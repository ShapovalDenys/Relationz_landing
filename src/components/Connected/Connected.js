import React from 'react';

import './Connected.scss';

function Connected() {
  return (
    <section className="connected">
      <div className="connected__icon">
        <img src="./img/connected-icon.svg" alt="connected-icon" />
      </div>
      <div className="connected__wrap">
        <div className="connected__description">
          <div className="connected__decor"><div /></div>
          <div className="connected__header">
            <h3>
              Send content around anxiety
              <br />
              <span>3 people on the list</span>
            </h3>
            <img src="./img/dots.svg" alt="dots" />
          </div>
          <div className="connected__decoration" />
          <p>Sending to:</p>
          <div className="connected__description-users">
            <span className="connected__description-users-name">
              <img src="./img/connected-user-1.png" alt="connected-user" />
              {' '}
              Archana Kamath
            </span>
            <span className="connected__description-users-name">
              <img src="./img/connected-user-2.png" alt="connected-user" />
              {' '}
              Surojit Saraswat
            </span>
            <span className="connected__description-users-name">
              <img src="./img/connected-user-3.png" alt="connected-user" />
              {' '}
              Surbhi Gangwar
            </span>
          </div>
          <div className="connected__description-paragraf">
            <p>
              We all worry and get upset from time to time.
              It’s a normal part of life, right?
              But what happens when that anxiety or anger
              takes over, and you can’t calm down?
              Being able to calm yourself in the mome...
            </p>
            <div className="connected__description-paragraf-line" />
          </div>
          <div className="connected__description-form">
            <img src="./img/send-message.svg" alt="send-message" />
            <button
              className="connected__description-form-button"
              type="button"
            >
              Send
            </button>
          </div>
        </div>

        <div className="connected__description-block">
          <h3>Stay connected in a few clicks </h3>
          <p>
            The multichannel sales engagement platform which
            automates personal email outreach, calls, and tasks,
            while Sales can focus on what really matters - closing
          </p>
          <div className="connected__description-block-mark">
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              The multichannel
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              The multichannel
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              The multichannel
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              The multichannel
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connected;
