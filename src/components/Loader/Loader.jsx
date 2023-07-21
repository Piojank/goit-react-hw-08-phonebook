import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.css';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Loader = () => (
    <div className={s.loader}>
        <AppBar />
        <Suspense fallback={null}>
            <Outlet />
        </Suspense>
        <ThreeCircles color="#2196f3" height={100} width={100} />
    </div>
);