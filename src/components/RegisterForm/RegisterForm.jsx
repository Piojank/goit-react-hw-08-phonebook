import s from "./RegisterForm.module.css";

export const RegisterForm = () => {
    return (
        <form className={s.form}>
        <label className={s.label}>
            <span className={s.text}>Name</span>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Input for your name"
                className={s.input}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>

        <label className={s.label}>
            <span className={s.text}>Email</span>
            <input
            type="email"
            name="email"
            className={s.input}
            placeholder="Your e-mail"
            aria-label="Input for your Email"
            required
        />
        </label>

        <label className={s.label}>
            <span className={s.text}>Password</span>
            <input
                type="password"
                name="password"
                className={s.input}
                placeholder="Should be at least 7 characters"
                aria-label="Input for your password"
                required
            />
        </label>

            <div className={s.container}>
                <button type="submit" className={s.button}>
                    Create account
                </button>
            </div>
        </form>
    );
};