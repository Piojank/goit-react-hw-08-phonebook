import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/authOperations';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return isRefreshing ? (
        <b>Refreshing user...</b>
    ) : (
        <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
            path="/register"
            element={
                <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
                />
            }
            />
            <Route
            path="/login"
            element={
                <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
            />
            <Route
            path="/contacts"
            element={
                <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
            />
        </Route>
        </Routes>
    );
};