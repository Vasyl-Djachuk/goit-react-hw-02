import clsx from 'clsx';
import css from './FriendListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.item}>
      <img className="avatar" src={avatar} alt="Avatar" width="88" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};
