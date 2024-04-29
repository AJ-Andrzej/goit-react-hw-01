import css from "./Profile.module.css"
export default function Profile({
    user: {username, tag, location, avatar, stats: {followers, views, likes}}
}) {
    return (
        <div className={css.container}>
    <div className={css.baseInfomation}>
    <img className={css.avatar}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.name}>{username}</p>
    <p className={css.info}>@{tag}</p>
    <p className={css.info}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.listItem}>
      <span>Followers</span>
      <span className={css.count}>{followers}</span>
    </li>
    <li className={css.listItem}>
      <span>Views</span>
      <span className={css.count}>{views}</span>
    </li>
    <li className={css.listItem}>
      <span>Likes</span>
      <span className={css.count}>{likes}</span>
    </li>
  </ul>
        </div>
    )
}

