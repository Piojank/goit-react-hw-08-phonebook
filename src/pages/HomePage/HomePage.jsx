import s from "./HomePage.module.css";

export const HomePage = () => {
    return (
        <div style={s.container}>
            <h1 style={s.title}>
                Contacts manager welcome page{' '}
                <span role="img" aria-label="Greeting icon">
                    💁‍♀️
                </span>
            </h1>
        </div>
    );
}