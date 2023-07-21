import React from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import s from "./Filter.module.css";
import { selectFilter } from "redux/contacts/contactsSelectors";
import { setFilter } from "redux/contacts/filterSlice";

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleChange = event => {
        dispatch(
            setFilter(event.target.value));
    };

    return (
        <>
        <h2 className={s.title}>Contacts</h2>
    
            <label className={s.label}>
                <span className={s.label__text}>Find contacts by name</span>
                <input
                    onChange={handleChange}
                    value={filter}
                    type="text"
                    name="filter"
                    placeholder="Find"
                    className={s.input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Find contacts by name"
                    required
                />
            </label>
        </>
    );
};

Filter.propTypes = {
    filter: PropTypes.func,
};