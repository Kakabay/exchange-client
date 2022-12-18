// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import TableRow from './TableRow';

const ChartTable = ({ activeRow, setActiveRow, tabIndex, lang }) => {
  const [dataTable, setDataTable] = useState();

  // Functions
  const rowActive = (num) => {
    setActiveRow(num);
  };

  useEffect(() => {
    // Table data fetch
    if (tabIndex) {
      const TableApi = new Api(
        `http://tmex.gov.tm:8765/api/categories/${tabIndex}/tradings`,
        // `http://tmex.gov.tm:8765/api/categories/8/tradings`,
        dataTable,
        setDataTable,
      ).get();
    }
  }, [tabIndex]);

  return (
    <div className="table">
      <div className="table-top">
        <h4 className="table-title">
          {lang === 'ru'
            ? 'Товарная позиция'
            : lang === 'tm'
            ? 'Harydyň ady'
            : lang === 'en'
            ? 'Product name'
            : null}
        </h4>
        <h4 className="table-title">
          {lang === 'ru'
            ? 'Изменение цены'
            : lang === 'tm'
            ? 'Bahanyň üýtgeýşi'
            : lang === 'en'
            ? 'Price change'
            : null}
        </h4>
        <h4 className="table-title">
          {lang === 'ru'
            ? 'Текущая цена'
            : lang === 'tm'
            ? 'Häzirki baha'
            : lang === 'en'
            ? 'Current price'
            : null}
        </h4>
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
