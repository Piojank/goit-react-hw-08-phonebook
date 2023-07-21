import { useDispatch } from "react-redux";
import s from "./RegisterForm.module.css";
import { register } from "redux/auth/authOperations";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    };

    return (
        <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={s.label}>
            <span className={s.text}>Name</span>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                aria-label="Input for your name"
                className={s.input}
                required
            />
        </label>

        <label className={s.label}>
            <span className={s.text}>Email</span>
            <input
            type="email"
            name="email"
            className={s.input}
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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