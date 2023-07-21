import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export const ContactForm = () => {
    return (
        <form className={s.form} >
            <label className={s.label}>
                <span className={s.label__text}>Name</span>
                <input
                    type="text"
                    name="name"
                    placeholder="Contact name"
                    aria-label="Input for your name"
                    className={s.input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
    
            <label className={s.label}>
                <span className={s.label__text}>Number</span>
                <input
                    type="tel"
                    name="number"
                    placeholder="Phone number"
                    aria-label="Input for your phone number"
                    className={s.input}
                    pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
                    title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
                    required
                />
            </label>
    
        <div className={s.container}>
            <button type="submit" className={s.button}>
                Add contact
            </button>
        </div>

        </form>
    );
};

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }),
    ),
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};