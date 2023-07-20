import { ThreeCircles } from 'react-loader-spinner';
import s from './Loader.module.css';

export const Loader = () => (
    <div className={s.loader}>
        <ThreeCircles color="#2196f3" height={100} width={100} />
    </div>
);