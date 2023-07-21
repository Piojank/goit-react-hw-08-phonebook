import s from "./ContactItem.module.css";
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperations';

export const ContactItem = ({ contactItem }) => {
    const dispatch = useDispatch();
    const del = () => {
        dispatch(deleteContact(contactItem.id));
    };

    return (
        <li className={s.list__item} id={contactItem.id}>
        {`${contactItem.name}:`}
        <span className={s.list__number}>
            {contactItem.number}
        </span>

        <button className={s.list__btn}
                type="button" onClick={del} 
                aria-label="Delete contact"
        >
            Delete
        </button>
        </li>
    );
};
