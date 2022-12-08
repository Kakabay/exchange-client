// Modules
import { useState, useEffect } from 'react';
import { Api } from '../helpers/api';
// Components
import SectionTitle from '../components/SectionTitle';
import ContactsCard from '../components/ContactsCard';

const Contacts = () => {
  const [contactsData, setContactsData] = useState();

  useEffect(() => {
    const ContactsApi = new Api(
      'http://tmex.gov.tm:8765/api/contacts',
      contactsData,
      setContactsData,
    );
    ContactsApi.get();

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  console.log(contactsData);
  return (
    <main>
      <div className="container">
        <div className="sub-page-wrapper">
          <SectionTitle title="Контакты" />
          <div className="contacts-wrapper">
            {contactsData
              ? contactsData.data.map((contactCard) => {
                  return (
                    <ContactsCard
                      key={contactCard.id}
                      title={contactCard.name}
                      firstPosition={contactCard.contacts[0].title}
                      firstPhone={contactCard.contacts[0].phone}
                      firstFax={contactCard.contacts[0].fax}
                      firstMail={contactCard.contacts[0].mail}
                      secondPosition={
                        contactCard.contacts[1]?.title ? contactCard.contacts[1]?.title : null
                      }
                      secondPhone={
                        contactCard.contacts[1]?.phone ? contactCard.contacts[1]?.phone : null
                      }
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;
