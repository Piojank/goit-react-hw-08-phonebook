import s from './ContactForm.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/contactsOperations';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const handelInputChange = event => {
        const { name, value } = event.target;
    
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    };
    
    const onSubmitForm = event => {
        event.preventDefault();
        if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
            return alert(`We already have ${name}`);
        }
        dispatch(addContact({ name: name, number: number, id: nanoid() }));
    
        reset();
    };
    
    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={s.form} onSubmit={onSubmitForm}>
            <label className={s.label} id={nameInputId}>
                <span className={s.label__text}>Name</span>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handelInputChange}
                    placeholder="Contact name"
                    aria-label="Input for your name"
                    className={s.input}
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={nameInputId}
                />
            </label>
    
            <label className={s.label} id={numberInputId}>
                <span className={s.label__text}>Number</span>
                <input
                    value={number}
                    onChange={handelInputChange}
                    type="tel"
                    name="number"
                    placeholder="Phone number"
                    aria-label="Input for your phone number"
                    className={s.input}
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={numberInputId}
                />
            </label>
    
        <div className={s.container}>
            <button type="submit" className={s.btn}>
                Add contact
            </button>
        </div>

        </form>
    );
};