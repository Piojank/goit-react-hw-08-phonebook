import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

export default function NotFoundPage() {
    return (
        <div>
            <h2 className={s.title}>404 Page not found!</h2>

            <p className={s.text}>
                The page you're looking for was removed, renamed, or got lost in space.
            </p>

            <NavLink
                to="/"
                className={s.btn}
                title="Return to Home"
                aria-label="Return to Home page"
            >
                Return to Home
            </NavLink>
        </div>
    )
};