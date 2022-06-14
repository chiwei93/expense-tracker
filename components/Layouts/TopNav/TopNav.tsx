import Link from "next/link";

import LightDarkModeBtn from "../../UI/Buttons/LightDarkModeBtn/LightDarkModeBtn";
import TopNavSelectBtn from "../../UI/Buttons/TopNavSelectBtn/TopNavSelectBtn";
import UserProfileBtn from "../../UI/Buttons/UserProfileBtn/UserProfileBtn";

import styles from "./TopNav.module.css";

interface Props {
  sidebarWidth: number;
}

const TopNav = (props: Props) => {
  const { sidebarWidth } = props;

  return (
    <nav
      aria-label="primary navigation"
      className={styles.nav}
      style={{ left: sidebarWidth, width: `calc(100vw - ${sidebarWidth}px)` }}
    >
      <div className={styles.logoContainer}>
        <Link href="/dashboard">
          <a className={styles.logo}>ExpTrack</a>
        </Link>
      </div>

      <div className={styles.projectOptionsContainer}>
        <div className={styles.selectContainer}>
          <TopNavSelectBtn />
        </div>

        <div className={styles.navBtnsContainer}>
          <div className={styles.toggleBtnContainer}>
            <LightDarkModeBtn />
          </div>

          <UserProfileBtn />
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
