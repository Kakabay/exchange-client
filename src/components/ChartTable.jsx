// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import TableRow from './TableRow';

const ChartTable = ({ activeRow, setActiveRow, tabIndex }) => {
  const [dataTable, setDataTable] = useState();

  // Functions
  const rowActive = (num) => {
    setActiveRow(num);
  };

  useEffect(() => {
    // Table data fetch
    const TableApi = new Api(
      `http://tmex.gov.tm:8765/api/categories/${tabIndex}/tradings`,
      // `http://tmex.gov.tm:8765/api/categories/8/tradings`,
      dataTable,
      setDataTable,
    ).get();
  }, [tabIndex]);

  return (
    <div className="table">
      <div className="table-top">
        <h4 className="table-title">Товарная позиция</h4>
        <h4 className="table-title">Изменение цены</h4>
        <h4 className="table-title">Текущая цена</h4>
      </div>
      <div className="table-bottom">
        {dataTable
          ? dataTable.data.map((tableRow, index) => {
              return (
                <TableRow
                  key={tableRow.id}
                  title={tableRow.title}
                  titleHide={tableRow.title.length > 7 ? 'title-hide' : null}
                  priceChange={tableRow.price_change}
                  price={tableRow.price}
                  currency={tableRow.currency}
                  onClick={() => rowActive(index)}
                  active={activeRow === index ? 'active' : ''}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ChartTable;
