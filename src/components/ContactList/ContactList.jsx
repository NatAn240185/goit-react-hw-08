import Contacts from '../Contact/Contact';
import css from './ContactList.module.css';
import {useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

const ContactList = () => {
  
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {searchStr.map(({ id, name, number }) => {
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
