// Modules
// Icons
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const TableRow = ({ active, onClick, title, priceChange, price, currency, titleHide }) => {
  return (
    <div className={`table-row ${active}`} onClick={() => onClick()}>
      <div className={`table-product-name ${titleHide}`}>{title}</div>
      <div className="table-row-status">
        <div className="table-row-arrow">
          <img src={priceChange > 0 ? arrowUp : priceChange < 0 ? arrowDown : ''} />
        </div>
        <span
          className={
            priceChange > 0
              ? 'table-row-status-title green'
              : priceChange < 0
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
