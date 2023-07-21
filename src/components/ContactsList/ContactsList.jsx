import { useSelector } from 'react-redux';
import s from './ContactsList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelectors';

export const ContactsList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredContacts = contacts.filter(el => {
        return el.name.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <ul className={s.list}>
            {filteredContacts.map(contact => (
            <ContactItem contactItem={contact} key={contact.id} />
            ))}
        </ul>
    );
};