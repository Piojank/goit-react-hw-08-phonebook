import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { useAuth } from "hooks/useAuth";
import { Loader } from './Loader/Loader';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

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
        <Route path="/" element={<Loader />} />
        <Route index element={<HomePage />} />
        <Route
            path="/register"
            element={
                <RestrictedRoute
                    redirectTo="/contacts"
                    component={() => (
                        <React.Suspense fallback={<Loader />}>
                            <RegisterPage />
                        </React.Suspense>
                    )}
                />
            }
        />
        <Route
            path="/login"
            element={
                <RestrictedRoute
                    redirectTo="/contacts"
                    component={() => (
                        <React.Suspense fallback={<Loader />}>
                            <LoginPage />
                        </React.Suspense>
                    )}
                />
            }
        />
        <Route
            path="/contacts"
            element={
                <PrivateRoute
                    redirectTo="/login"
                    component={() => (
                        <React.Suspense fallback={<Loader />}>
                            <ContactsPage />
                        </React.Suspense>
                    )}
                />
            }
        />
    </Routes>
);
};