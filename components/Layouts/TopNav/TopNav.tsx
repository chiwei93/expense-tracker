import Link from "next/link";
import { useRef } from "react";

import LightDarkModeBtn from "../../UI/Buttons/LightDarkModeBtn/LightDarkModeBtn";
import TopNavSelectBtn from "../../UI/Buttons/TopNavSelectBtn/TopNavSelectBtn";
import UserProfileBtn from "../../UI/Buttons/UserProfileBtn/UserProfileBtn";

import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

import styles from "./TopNav.module.css";

interface Props {
  sidebarWidth: number;
  handleNavbarHeightChange: (height: number) => void;
}

const TopNav = (props: Props) => {
  const { sidebarWidth, handleNavbarHeightChange } = props;

  const navbarRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const handleHeightChange = () => {
      if (navbarRef.current) {
        handleNavbarHeightChange(navbarRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleHeightChange);
    window.addEventListener("load", handleHeightChange);

    return () => {
      window.removeEventListener("resize", handleHeightChange);
      window.removeEventListener("load", handleHeightChange);
    };
  }, [handleNavbarHeightChange]);

  return (
    <nav
      aria-label="primary navigation"
      className={styles.nav}
      style={{ left: sidebarWidth, width: `calc(100vw - ${sidebarWidth}px)` }}
      ref={navbarRef}
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
