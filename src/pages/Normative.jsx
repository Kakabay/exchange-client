import SectionTitle from '../components/SectionTitle';

export const Normative = () => {
  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Нормативная база" />

          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                Арбитражная комиссия в своей деятельности руководствуется Конституцией, законами,
                актами Президента, положением Биржи, правилами биржевой торговли и другими
                нормативно-правовыми актами.
              </p>
            </div>

            <div className="sub-page-list">
              <h2 className="sub-page-title">В компетенцию Арбитражной комиссии входит:</h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">
                    Аннулирование действия сделок, заключенных на биржевых торгах.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">
                    Аннулирование зарегистрированных и невостребованных на Бирже договоров.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение споров по биржевым сделкам и вопросам биржевой торговли.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение споров по договорам, при их заключении, внесении изменений и
                    расторжении.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">
                    Комиссия вправе изменить, отменить и восстановить принятое решение.
                  </h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">6</div>
                  <h3 className="sub-page-list-item-text">
                    Рассмотрение нарушений, допущенных участниками биржевой торговли.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Normative;
