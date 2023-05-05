import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contactsSlice';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contactsFromStore = useSelector(state => state.contacts.items);
  const filterQuery = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = getFilteredContacts(contactsFromStore);
  
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  function getFilteredContacts(contacts) {
    const normFilter = filterQuery.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normFilter)
      );
  }

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.length > 0 &&
        filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
    </ul>
  );
}

export default ContactList;