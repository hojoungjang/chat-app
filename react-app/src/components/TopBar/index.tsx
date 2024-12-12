import ProfileAvatar from "../ProfileAvatar";

import styles from "./TopBar.module.css";

type TopBarProps = {
  username?: string;
};

const TopBar = (props: TopBarProps) => {
  const { username = "Brian" } = props;

  return (
    <div className={styles.topBarContainer}>
      <div className={styles.title}>My Chat</div>
      <div className={styles.profileContainer}>
        <ProfileAvatar />
        <div>{username}</div>
      </div>
    </div>
  );
};

export default TopBar;
