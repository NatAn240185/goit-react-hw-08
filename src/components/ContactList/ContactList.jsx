import Contacts from '../Contact/Contact';
import css from './ContactList.module.css';
import {useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  
  const searchStr = useSelector(selectFilteredContacts);
  if (searchStr.length === 0) {
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
