import '../Contact/Contact'
import './ContactList.module.css'
const ContactList = ({ contacts, deleteContacts }) => {
    return (
      <ul className={css.list}>
        {contacts.map(({ id, name, number }) => {
          return (
            <Contact
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
