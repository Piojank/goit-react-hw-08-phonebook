// import PropTypes from 'prop-types';
import s from "./LoginForm.module.css";

export const LoginForm = () => {
    return (
        <form className={s.form}>
            <label className={s.label}>
                <span className={s.text}>Email</span>
                <input
                type="email"
                name="email"
                className={s.input}
                placeholder="Your e-mail"
                aria-label="Input for your email"
                required
                />
            </label>

            <label className={s.label}>
                <span className={s.text}>Password</span>
                <input
                type="password"
                name="password"
                className={s.input}
                placeholder="Your password"
                aria-label="Input for your password"
                required
                />
            </label>

            <div className={s.container}>
                <button type="submit" className={s.button}>
                Log in
                </button>
            </div>
        </form>
    );
};