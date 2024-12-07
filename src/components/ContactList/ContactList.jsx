import Contacts from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, deleteContacts }) => {
    return (
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contacts
              key={id}
              id={id}
              name={name}
              number={number}
              deleteContacts={deleteContacts}
            />
          );
        })}
        </ul>
    );
  };
  
  export default ContactList;
