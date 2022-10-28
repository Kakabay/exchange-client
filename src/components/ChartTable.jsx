const ChartTable = () => {
  return (
    <div className="table">
      <div className="table-top">
        <h4 className="table-title">Товарная позиция</h4>
        <h4 className="table-title">Изменение цены</h4>
        <h4 className="table-title">Текущая цена</h4>
      </div>
      <div className="table-bottom">
        <div className="table-row active">
          <span className="table-product-name">Арматура</span>
          <span className="table-product-rate">-0,56 %</span>
          <span className="table-product-price">1780.00</span>
        </div>
        <div className="table-row">
          <span className="table-product-name">Арматура</span>
          <span className="table-product-rate">-0,56 %</span>
          <span className="table-product-price">1780.00</span>
        </div>
        <div className="table-row active">
          <span className="table-product-name">Арматура</span>
          <span className="table-product-rate">-0,56 %</span>
          <span className="table-product-price">1780.00</span>
        </div>
        <div className="table-row">
          <span className="table-product-name">Арматура</span>
          <span className="table-product-rate">-0,56 %</span>
          <span className="table-product-price">1780.00</span>
        </div>
      </div>
    </div>
  );
};

export default ChartTable;
