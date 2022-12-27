import style from './PhonebookListItem.module.css';

const PhonebookListItem = ({ name, number, onDelete }) => {
    return (<span className={style.contact}>
        <span className={style.contactName}>{name} :</span>
        {number}
    </span>);
}

export default PhonebookListItem;