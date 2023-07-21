import s from "./ContactItem.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactItem = ({ contactItem }) => {
    const dispatch = useDispatch();
    const del = () => {
        dispatch(deleteContact(contactItem.id));
    };

    return (
        <li className={s.item} id={contactItem.id}>
        <span className={s.name}>{contactItem.name}</span>
        <a href={`tel:${contactItem.number}`} className={s.number}>
            {contactItem.number}
        </a>

        <button type="button" onClick={del} aria-label="Delete contact">
            Delete
        </button>
        </li>
    );
};
