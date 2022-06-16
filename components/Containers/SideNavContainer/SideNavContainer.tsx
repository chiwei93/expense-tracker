import { useState } from "react";

import Sidebar from "../../Layouts/Sidebar/Sidebar";
import TopNav from "../../Layouts/TopNav/TopNav";

import styles from "./SideNavContainer.module.css";

interface Props {
  children?: React.ReactNode;
}

const SideNavContainer = (props: Props) => {
  const { children } = props;

  const desktopBreakpoint = 1440;
  const tabletBreakpoint = 744;

  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [topNavHeight, setTopNavHeight] = useState(0);

  const calculatedMainPaddingTop = () => {
    let extraPadding = 1.5;

    if (typeof window !== "undefined") {
      if (window.innerWidth >= desktopBreakpoint) {
        extraPadding = 1.5;
      } else if (window.innerWidth >= tabletBreakpoint) {
        extraPadding = 1.5;
      }
    }

    return `calc(${topNavHeight}px + ${extraPadding}em)`;
  };

  const calculatedMainPaddingLeft = () => {
    let extraPadding = 2;

    if (typeof window !== "undefined") {
      if (window.innerWidth >= desktopBreakpoint) {
        extraPadding = 2;
      } else if (window.innerWidth >= tabletBreakpoint) {
        extraPadding = 2;
      }
    }

    return `calc(${sidebarWidth}px + ${extraPadding}em)`;
  };

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
          paddingLeft: calculatedMainPaddingLeft(),
          paddingTop: calculatedMainPaddingTop(),
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default SideNavContainer;
