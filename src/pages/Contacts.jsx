// Modules
import { useEffect } from 'react';
// Components
import SectionTitle from '../components/SectionTitle';
import ContactsCard from '../components/ContactsCard';

const Contacts = () => {
  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Контакты" />
          <div className="contacts-wrapper">
            <ContactsCard
              title="Председатель"
              firstPosition="Приемная"
              firstPhone="+993 (12) 446630"
              firstFax="+993 (12) 446616"
              firstMail="arza-shikayat@exchange.gov.tm"
            />
            <ContactsCard
              title="Заместитель председателя"
              firstPosition="Приемная"
              firstPhone="+993 (12) 446101"
            />
            <ContactsCard
              title="Отдел организации биржевой торговли"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446116"
              secondPosition="Маклер"
              secondPhone="+993 (12) 446275"
            />
            <ContactsCard
              title="Департамент анализа и новых технологий"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446020"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446015"
            />
            <ContactsCard
              title="Отдел регистрации биржевых контрактов (договоров)"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446030"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446260"
            />
            <ContactsCard
              title="Отдел анализа цен и рынка"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446055"
            />
            <ContactsCard
              title="Бухгалтерия"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446070"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446071"
            />
            <ContactsCard
              title="Отдел взаиморасчетов"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446080"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446037"
            />
            <ContactsCard
              title="Отдел экономического анализа"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446090"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446091"
            />
            <ContactsCard
              title="Юридический отдел"
              firstPosition="Начальник отдела"
              firstPhone="+993 (12) 446040"
              secondPosition="Зам. нач. отдела"
              secondPhone="+993 (12) 446047"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
