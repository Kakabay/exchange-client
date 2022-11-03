// Modules
import { useEffect } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';

export const Register = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Регистрация договоров" />

          <div className="sub-page-content-wrapper">
            <div className="sub-page-list">
              <h2 className="sub-page-title">
                Регистрация договоров на государственной товарно-сырьевой бирже Туркменистана
                осуществляется по приведенной схеме:
              </h2>
              <div className="sub-page-list">
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">1</div>
                  <h3 className="sub-page-list-item-text">Прием документов с 9.00 до 17.00.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">2</div>
                  <h3 className="sub-page-list-item-text">Отдел анализа и рынка цен.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">3</div>
                  <h3 className="sub-page-list-item-text">Управление права и кадров.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">4</div>
                  <h3 className="sub-page-list-item-text">Регистрационный отдел.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">5</div>
                  <h3 className="sub-page-list-item-text">Отдел взаиморасчета.</h3>
                </div>
                <div className="sub-page-list-item">
                  <div className="sub-page-list-num">6</div>
                  <h3 className="sub-page-list-item-text">Передача на подпись руководителям.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
