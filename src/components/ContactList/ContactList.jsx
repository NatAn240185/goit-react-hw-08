import Contacts from '../Contact/Contact';
import css from './ContactList.module.css';
import {useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilters);

    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchStr.toLowerCase())
  );
  if (filteredContacts.length === 0) {
    return;
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contacts
            key={id}
            id={id}
            name={name}
            number={number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
