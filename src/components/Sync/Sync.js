import React from 'react';

import './Sync.scss';

function Sync() {
  return (
    <section className="sync">
      <div className="sync__icon"><img src="./img/sync.svg" alt="sync" /></div>
      <div className="sync__wrap">
        <div className="sync__description">
          <h3>Our sync remembers everything</h3>
          <p>
            We build a huge databasse of all your contacts
            with all the possible details they share with you
            and you can access it anywhere, anytime.
            It’s works so well that you will love it like we do.
          </p>
          <div className="sync__description-mark">
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              Available on devices
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              Can be accesed via phonebook
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              Seatch details
            </span>
            <span>
              <img src="./img/mark.svg" alt="mark" />
              {' '}
              24X7 Support
            </span>
          </div>
        </div>
        <div className="sync__user-card">
          <div className="sync__user-card-media">
            <img src="./img/sync-user-1.png" alt="sync-user" />
            <h4>
              Archana Deshmukh
              <br />
              <span>Product Design Consultant</span>
            </h4>
          </div>
          <span className="sync__user-card-info">More Information</span>
          <p>
            <img
              className="sync__user-card-icon"
              src="./img/birthday-icon.svg"
              alt="birsday-icon"
            />
            17 April, 1994
          </p>
          <p>
            <img
              className="sync__user-card-icon"
              src="./img/work-icon.svg"
              alt="birsday-icon"
            />
            Product Design Consultant
          </p>
          <p>
            <img
              className="sync__user-card-icon"
              src="./img/check-mark-icon.svg"
              alt="birsday-icon"
            />
            Went to Amsterdam with parents to visit her brother.
          </p>
          <div className="sync__user-card-decoration"><div /></div>
        </div>
      </div>
    </section>
  );
}

export default Sync;
