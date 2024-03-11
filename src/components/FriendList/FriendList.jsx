import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, ...friend }) => (
        <li className={css.item} key={id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
};
