import PropTypes from 'prop-types';
import s from "./ContactItem.module.css";

export const ContactItem = ({ contact, onDelete }) => {
    return (
        <li className={s.item} key={contact.id}>
        <span className={s.name}>{contact.name}</span>
        <a href={`tel:${contact.number}`} className={s.number}>
            {contact.number}
        </a>

        <button onClick={onDelete} aria-label="Delete contact">
            Delete
        </button>
        </li>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDeleteContact: PropTypes.func.isRequired,
};