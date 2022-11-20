import React from 'react';
// Icons
import phone from '../assets/icons/phone.svg';
import fax from '../assets/icons/fax.svg';
import mail from '../assets/icons/mail.svg';

const ContactsCard = ({
  title,
  firstPosition,
  secondPosition,
  firstPhone,
  secondPhone,
  firstFax,
  firstMail,
}) => {
  return (
    <div className="contacts-card">
      <h2 className="contacts-card-title">{title}</h2>
      <div className="contacts-card-pos-wrapper">
        {firstPosition && firstPhone ? (
          <div className="contacts-card-pos">
            <h3 className="contacts-card-pos-title">{firstPosition}</h3>
            <div className="contacts-card-pos-contact">
              <div className="contacts-card-pos-contact-icon">
                <img src={phone} alt="phone" />
              </div>
              <h4 className="contacts-card-pos-contact-title">{firstPhone}</h4>
            </div>
            {firstFax ? (
              <div className="contacts-card-pos-contact">
                <div className="contacts-card-pos-contact-icon">
                  <img src={fax} alt="fax" />
                </div>
                <h4 className="contacts-card-pos-contact-title">{firstPhone}</h4>
              </div>
            ) : null}
            {firstMail ? (
              <div className="contacts-card-pos-contact">
                <div className="contacts-card-pos-contact-icon">
                  <img src={mail} alt="mail" />
                </div>
                <h4 className="contacts-card-pos-contact-title">{firstMail}</h4>
              </div>
            ) : null}
          </div>
        ) : null}
        {secondPosition && secondPhone ? (
          <div className="contacts-card-pos">
            <h3 className="contacts-card-pos-title">{secondPosition}</h3>
            <div className="contacts-card-pos-contact">
              <div className="contacts-card-pos-contact-icon">
                <img src={phone} alt="phone" />
              </div>
              <h4 className="contacts-card-pos-contact-title">{secondPhone}</h4>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ContactsCard;
