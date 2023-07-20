import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = ({ contacts, onDelete }) => {
    return (
        <ul className={s.list}>
            {contacts.map(contact => (
            <ContactItem
                key={contact.id}
                contact={contact}
                onDelete={() => onDelete(contact.id)}
            />
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    onDelete: PropTypes.func.isRequired,
};