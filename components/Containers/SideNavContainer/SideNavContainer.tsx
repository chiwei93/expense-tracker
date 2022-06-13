import { useState } from "react";
import Sidebar from "../../Layouts/Sidebar/Sidebar";
import TopNav from "../../Layouts/TopNav/TopNav";

import styles from "./SideNavContainer.module.css";

interface Props {
  children?: React.ReactNode;
}

const SideNavContainer = (props: Props) => {
  const { children } = props;

  const [sidebarWidth, setSidebarWidth] = useState(0);

  return (
    <div className={styles.container}>
      <TopNav sidebarWidth={sidebarWidth} />
      <Sidebar handleSidebarWidthChange={setSidebarWidth} />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default SideNavContainer;
