// Modules
// Icons
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import { useEffect, useState } from 'react';

const TableRow = ({ active, onClick, title, priceChange, price, currency, titleHide }) => {
  const priceParser = (price) => {
    const priceArr = Array.from(price);
    priceArr.pop();
    let parsedPrice = '';
    priceArr.forEach((str) => {
      parsedPrice = parsedPrice + str;
    });
    return parseFloat(parsedPrice);
  };

  const [parsedPriceChange, setParsedPriceChange] = useState();

  useEffect(() => {
    setParsedPriceChange(priceParser(priceChange));
  }, [priceChange]);

  return (
    <div className={`table-row ${active}`} onClick={() => onClick()}>
      <div className={`table-product-name ${titleHide}`}>{title}</div>
      <div className="table-row-status">
        <div className="table-row-arrow">
          <img src={parsedPriceChange > 0 ? arrowUp : parsedPriceChange < 0 ? arrowDown : ''} />
        </div>
        <span
          className={
            parsedPriceChange > 0
              ? 'table-row-status-title green'
              : parsedPriceChange < 0
              ? 'table-row-status-title red'
              : 'table-row-status-title'
          }>
          {priceChange}
        </span>
      </div>
      <div className="table-product-price">
        {price} {currency}
      </div>
    </div>
  );
};

export default TableRow;
