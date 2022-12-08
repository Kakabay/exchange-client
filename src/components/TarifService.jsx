import React from 'react';

const TarifService = ({ title, price }) => {
  return (
    <div className="tarif-service-item">
      <h2 className="tarif-service-text">{title}</h2>
      <h2 className="tarif-service-price">{price} </h2>
    </div>
  );
};

export default TarifService;
