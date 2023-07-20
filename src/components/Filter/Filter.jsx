import s from "./Filter.module.css";

export const Filter = () => {
    return (
        <div className={s.container}>
        <h2 className={s.title}>Contacts</h2>
    
            <label className={s.label}>
                <span className={s.label__text}>Find contacts by name</span>
                <input
                    type="text"
                    name="filter"
                    placeholder="Find"
                    className={s.input}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Find contacts by name"
                    required
                />
            </label>
        </div>
    );
};