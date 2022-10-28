// Styles

// Components
import SectionTitle from '../components/SectionTitle';
const Gtsbt = () => {
  return (
    <main>
      <div className="container">
        <div className="gtsbt-wrapper">
          <SectionTitle title="О бирже" />
          <div className="gtsbt-content-wrapper">
            <div className="text-wrapper">
              <p>
                Государственная товарно-сырьевая биржа Туркменистана была создана Указом Президента
                Туркменистана от 29 июля 1994 года и является важнейшим экономическим институтом
                страны. Биржа выполняет функцию главного органа государственного регулирования
                экспортно-импортных операций. Отлаженный механизм функционирования позволяет ей
                успешно интегрироваться в международную экономическую систему.
              </p>
              <p>
                Спектр деятельности ГТСБТ чрезвычайно широк – она является универсальной биржей,
                принимая и реализуя через торги различные товарно-материальные ценности (за
                исключением объектов интеллектуальной собственности), произведения искусства и
                недвижимость.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gtsbt;