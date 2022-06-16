import { useState } from "react";

import Sidebar from "../../Layouts/Sidebar/Sidebar";
import TopNav from "../../Layouts/TopNav/TopNav";

import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

import styles from "./SideNavContainer.module.css";

interface Props {
  children?: React.ReactNode;
}

const SideNavContainer = (props: Props) => {
  const { children } = props;

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(2);

  useIsomorphicLayoutEffect(() => {
    const handlePaddingLeft = () => {
      const desktopBreakpoint = 1440;

      if (window.innerWidth >= desktopBreakpoint) {
        setPaddingLeft(5);
      } else {
        setPaddingLeft(2);
      }
    };

    window.addEventListener("resize", handlePaddingLeft);
    window.addEventListener("load", handlePaddingLeft);

    return () => {
      window.removeEventListener("resize", handlePaddingLeft);
      window.removeEventListener("load", handlePaddingLeft);
    };
  }, []);

  return (
    <div className={styles.container}>
      <TopNav
        sidebarWidth={sidebarWidth}
        handleNavbarHeightChange={setTopNavHeight}
      />
      <Sidebar handleSidebarWidthChange={setSidebarWidth} />

      <main
        className={styles.mainContent}
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

export default SideNavContainer;
