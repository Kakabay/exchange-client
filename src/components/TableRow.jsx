// Modules
// Icons
import arrowUp from '../assets/icons/arrow-up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';

const TableRow = ({ active, status, onClick }) => {
  return (
    <div className={`table-row ${active}`} onClick={() => onClick()}>
      <span className="table-product-name">Арматура</span>
      <div className="table-row-status">
        <div className="table-row-arrow">
          <img src={status > 0 ? arrowUp : arrowDown} />
        </div>
        <span className={`table-row-status-title ${status > 0 ? 'green' : 'red'}`}>{status}</span>
      </div>
      <span className="table-product-price">1780.00</span>
    </div>
  );
};

export default TableRow;
