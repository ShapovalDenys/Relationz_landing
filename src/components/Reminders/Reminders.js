import React, { useState, useEffect } from 'react';

import './Reminders.scss';

function Reminders() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section className="reminders">
      <div className="reminders__task">
        <form className="reminders__form" method="POST" action="#">
          <input
            type="text"
            name="text"
            placeholder="Find classes, task and anything..."
            className="reminders__form-input"
            maxLength={60}
          />
          <button
            type="submit"
            className="reminders__form-button"
          >
            New Tasks
          </button>
        </form>
        <div className="reminders__decoration" />
        <div className="reminders__settings">
          <img src="./img/alert-icon.svg" alt="alert" />
          <img src="./img/settings-icon.svg" alt="settings" />
        </div>
        <div className="reminders__decoration" />
        <div className="reminders__time">
          {time}
        </div>
      </div>
      <div className="reminders__message">
        <div>+</div>
        <h2>Hi Rohan,</h2>
        <p>
          Welcome to all new Relationz,
          we have updated just abour everything
          to help to stay in touch with people
          who matters to you the most.
        </p>
        <a href="/#">Get Started</a>
      </div>
      <div className="reminders__meetings-wrap">
        <div className="reminders__meetings-outer">
          <div className="meetings">
            <h3>Upcoming Meetings</h3>
            <img src="./img/dots.svg" alt="alert" />
          </div>
          <div className="meetings__table">
            <span>Person</span>
            <span className="meetings__table-span-center">Last met on</span>
            <span>Meeting date</span>
          </div>

          <div className="meetings__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-1.png" alt="relationz-user" />
              <h4>Archana</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>12 Dec, 2019</h4>
              <h4>27 Jan, 2020</h4>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-2.png" alt="relationz-user" />
              <h4>Surojit</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>1 Jan, 2020</h4>
              <h4>28 Jan, 2020</h4>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-3.png" alt="relationz-user" />
              <h4>Surbhi</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>19 Nov, 2019</h4>
              <h4>31 Jan, 2020</h4>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-4.png" alt="relationz-user" />
              <h4>William</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>16 Jan, 2020</h4>
              <h4>2 Feb, 2020</h4>
            </div>
          </div>

        </div>
        <div className="reminders__meetings-outer">
          <div className="meetings">
            <h3>Recently Added</h3>
            <img src="./img/dots.svg" alt="alert" />
          </div>
          <div className="meetings__table">
            <span>Person</span>
            <span>Role</span>
            <span>Send Email</span>
          </div>

          <div className="meetings__paragraph reminders__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-5.png" alt="relationz-user" />
              <h4>Aditya</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>UI Designer</h4>
              <button
                className="meetings__paragraph-button"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph reminders__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-6.png" alt="relationz-user" />
              <h4>Bhawna</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>Developer</h4>
              <button
                className="meetings__paragraph-button
                meetings__paragraph-button-disable"
                type="submit"
              >
                Sent
              </button>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph reminders__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-7.png" alt="relationz-user" />
              <h4>Sukalp</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>Design Manager</h4>
              <button
                className="meetings__paragraph-button"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>

          <div className="meetings__decoration" />

          <div className="meetings__paragraph reminders__paragraph">
            <div className="meetings__paragraph-user">
              <img src="./img/relationz-user-8.png" alt="relationz-user" />
              <h4>Jenna</h4>
            </div>
            <div className="meetings__paragraph-action">
              <h4>Senior Developer</h4>
              <button
                className="meetings__paragraph-button"
                type="submit"
              >
                Send
              </button>
            </div>
          </div>

        </div>
      </div>
      <div className="try-it__decor-text reminders__decor">
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
    </section>
  );
}

export default Reminders;
