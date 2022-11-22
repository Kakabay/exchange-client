import React from 'react';

const TarifService = ({ title, price, activeTab }) => {
  return (
    <div className="tarif-service-item">
      <h2 className="tarif-service-text">{title}</h2>
      <h2 className="tarif-service-price">
        {price}{' '}
        {activeTab === 1 ? (price.length < 7 ? 'TMT' : null) : price.length < 7 ? '$' : null}
      </h2>
    </div>
  );
};

export default TarifService;
