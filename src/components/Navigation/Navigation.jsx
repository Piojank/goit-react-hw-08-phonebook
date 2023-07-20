import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export const Navigation = ({ isAuthenticated }) => {
    <nav>
    <ul className={s.list}>
        <li className={s.item}>
            <NavLink
                exact
                to="/"
                className={s.link}
                activeClassName={s['link--active']}
            >
                Home
            </NavLink>
        </li>

    {isAuthenticated && (
        <li>
            <NavLink
                to="/contacts"
                className={s.link}
                activeClassName={s['link--active']}
            >
                Contacts
            </NavLink>
            </li>
        )}
    </ul>
    </nav>
};

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};
