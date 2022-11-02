import SectionTitle from '../components/SectionTitle';

const Finance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Финансовый мониторинг" />
          <div className="sub-page-content-wrapper">
            <div className="sub-page-text-wrapper">
              <p>
                В целях организации противодействия легализации доходов, полученных от преступной
                деятельности, и финансированию терроризма, на бирже установлены Правила, которые
                определяют основные цели и задачи, требования внутреннего контроля. Также биржей
                назначается лицо, ответственное за соблюдение этих правил.
              </p>
              <p>
                Сотрудник комиссии, на основании полученной информации от клиента, тщательно
                проверяет ее с учетом видов деятельности и операций клиента, оценивает и присваивает
                соответствующий уровень риска, а также вносит ее в АБС.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Finance;
