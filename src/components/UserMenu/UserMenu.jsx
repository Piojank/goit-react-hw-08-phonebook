import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import s from "./UserMenu.module.css";
import { logOut } from "redux/auth/authOperations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={s.wrapper}>
            <p className={s.username}>Welcome, {user.name}</p>
            <button className={s.btn} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};