import Sidebar from "../../Layouts/Sidebar/Sidebar";
import TopNav from "../../Layouts/TopNav/TopNav";

import styles from "./SideNavContainer.module.css";

interface Props {
  children?: React.ReactNode;
}

const SideNavContainer = (props: Props) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <TopNav />
      <Sidebar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
};

export default SideNavContainer;
