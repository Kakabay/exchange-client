import React from 'react';
import { Link } from 'react-router-dom';

const LatestNew = () => {
  return (
    <Link to={'/'} className="latest-new">
      <h3 className="latest-new-date">18.08.2022</h3>
      <h2 className="latest-new-title">
        Президент Туркменистана принял кадровое решение в составе органов прокуратуры
      </h2>
    </Link>
  );
};

export default LatestNew;
