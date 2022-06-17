import { useState } from "react";
import cls from "classnames";

import Sidebar from "../../Layouts/Sidebar/Sidebar";
import TopNav from "../../Layouts/TopNav/TopNav";

import { useAppSelector } from "../../../store";
import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

import {
  TABLET_BREAKPOINT,
  DESKTOP_BREAKPOINT,
} from "../../../shared/constants";

import styles from "./PageContainer.module.css";

interface Props {
  children: React.ReactNode;
}

const PageContainer = (props: Props) => {
  const { children } = props;

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(1.5);

  useIsomorphicLayoutEffect(() => {
    const handlePaddingLeftChange = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) {
        setPaddingLeft(5);
      } else if (window.innerWidth >= TABLET_BREAKPOINT) {
        setPaddingLeft(2);
      } else {
        setPaddingLeft(1.5);
      }
    };

    handlePaddingLeftChange();
    window.addEventListener("resize", handlePaddingLeftChange);

    return () => {
      window.removeEventListener("resize", handlePaddingLeftChange);
    };
  }, []);

  const getIsAuthenticatedClass = () => {
    if (isAuthenticated) {
      return null;
    } else {
      return styles.notAuthenticated;
    }
  };

  return (
    <div className={styles.container}>
      {isAuthenticated && (
        <TopNav
          sidebarWidth={sidebarWidth}
          handleNavbarHeightChange={setTopNavHeight}
        />
      )}
      {isAuthenticated && (
        <Sidebar handleSidebarWidthChange={setSidebarWidth} />
      )}

      <main
        className={cls(styles.mainContent, getIsAuthenticatedClass())}
        style={{
          paddingLeft: `calc(${sidebarWidth}px + ${paddingLeft}em)`,
          paddingTop: `calc(${topNavHeight}px + 1.5em)`,
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default PageContainer;
