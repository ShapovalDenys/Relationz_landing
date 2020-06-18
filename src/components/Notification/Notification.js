import React from 'react';

import './Notification.scss';

function Notification() {
  return (
    <section className="notification">
      <div className="notification__decoration-1" />
      <div className="notification__decoration-2"><div /></div>
      <div className="notification__messages">

        <div className="notification__message">
          <img
            className="notification__message-autor-img"
            src="./img/notification-user-1.png"
            alt="notification-user"
          />
          <p>
            You have a meeting with{' '}
            <strong>Surbhi </strong>
            to help her with her portfolio. She got a new pet (Dog named Tiger).
          </p>
        </div>

        <div className="notification__message">
          <img
            className="notification__message-autor-img"
            src="./img/notification-user-2.png"
            alt="notification-user"
          />
          <p>
            <strong>Ripal</strong>
            {' '}
            has recently been to Thailand and she
            wants to discuss about new Job opportunity.
          </p>
        </div>

        <div className="notification__message">
          <img
            className="notification__message-autor-img"
            src="./img/notification-user-3.png"
            alt="notification-user"
          />
          <p>
            <strong>Prashasti</strong>
            {' '}
            hasn’t responded to your Email from 22 Jan, 2020
            <br />
            <strong>Want to check up on her?</strong>
            <a href="/">
              {' '}
              Follow up
              {' '}
              <img src="./img/follow-me.svg" alt="follow-me" />
            </a>
          </p>
        </div>

      </div>

      <div className="notification__description">
        <h3>Get reminders to follow up</h3>
        <p>
          We remind you of everything important and track
          everything that’s important to your important ones
          so you always stay connected. We only tell you the
          details when you need them the most.
        </p>
        <div className="notification__description-mark">
          <span>
            <img src="./img/mark.svg" alt="mark" />
            {' '}
            Birthdays
          </span>
          <span>
            <img src="./img/mark.svg" alt="mark" />
            {' '}
            Business Meetings
          </span>
          <span>
            <img src="./img/mark.svg" alt="mark" />
            {' '}
            Friends & Family
          </span>
          <span>
            <img src="./img/mark.svg" alt="mark" />
            {' '}
            Surroundings
          </span>
        </div>
      </div>

    </section>
  );
}

export default Notification;
