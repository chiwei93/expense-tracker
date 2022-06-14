import { BiChevronRightCircle } from "react-icons/bi";

import BreadCrumb from "../../UI/BreadCrumb/BreadCrumb";

import styles from "./BreadCrumbsList.module.css";

interface Props {}

const BreadCrumbsList = (props: Props) => {
  return (
    <ul>
      <li>
        <BreadCrumb>Dashboard</BreadCrumb>
      </li>
    </ul>
  );
};

export default BreadCrumbsList;
