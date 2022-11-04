// Modules
import React from 'react';
// Icons
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const TickerBlock = ({ status }) => {
  return (
    <div className="ticker-block">
      <h3 className="ticker-title">Арматура</h3>
      <div className="ticker-content">
        <div className="ticker-price">1780.00</div>
        <div className="ticker-status">
          <div className="ticker-arrow">
            <img src={status > 0 ? arrowUp : arrowDown} />
          </div>
          <span className={`ticker-status-title ${status > 0 ? 'green' : 'red'}`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default TickerBlock;
