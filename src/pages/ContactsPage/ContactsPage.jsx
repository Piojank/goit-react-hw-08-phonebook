import s from "./ContactsPage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts } from 'redux/contacts/contactsSelectors';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Section } from "components/Section/Section";
import { Notification } from "components/Notification/Notification";

const Contacts = () => {
    const contacts = useSelector(selectContacts);

    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={s.container}>
            <Section title="Phonebook">

            </Section>
            <Section title="Contacts">
                {contacts.length > 1 && <Filter /> }
                {contacts.length > 0 && (
                    <ContactsList />
                )}
                {contacts.length < 1 && <Notification message="You phonebook is empty! Please add contact."/>}
            </Section>
        </div>
    );
};

export default Contacts;