import type { NextPage } from "next";

import SideNavContainer from "../components/Containers/SideNavContainer/SideNavContainer";
import BreadCrumbsList from "../components/Layouts/BreadCrumbsList/BreadCrumbsList";

import styles from "../styles/Dashboard.module.css";

const Dashboard: NextPage = () => {
  return (
    <SideNavContainer>
      <BreadCrumbsList />
    </SideNavContainer>
  );
};

export default Dashboard;
