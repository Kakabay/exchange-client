// Modules
import { useState } from 'react';
// Components
import TableRow from './TableRow';

const ChartTable = () => {
  const plus = 0.56;
  const minus = -0.56;
  const [activeRow, setActiveRow] = useState(1);

  // Functions
  const rowActive = (num) => {
    setActiveRow(num);
  };

  return (
    <div className="table">
      <div className="table-top">
        <h4 className="table-title">Товарная позиция</h4>
        <h4 className="table-title">Изменение цены</h4>
        <h4 className="table-title">Текущая цена</h4>
      </div>
      <div className="table-bottom">
        <TableRow
          status={minus}
          onClick={() => rowActive(1)}
          active={activeRow === 1 ? 'active' : ''}
        />
        <TableRow
          status={plus}
          onClick={() => rowActive(2)}
          active={activeRow === 2 ? 'active' : ''}
        />
        <TableRow
          status={minus}
          onClick={() => rowActive(3)}
          active={activeRow === 3 ? 'active' : ''}
        />
        <TableRow
          status={plus}
          onClick={() => rowActive(4)}
          active={activeRow === 4 ? 'active' : ''}
        />
      </div>
    </div>
  );
};

export default ChartTable;
