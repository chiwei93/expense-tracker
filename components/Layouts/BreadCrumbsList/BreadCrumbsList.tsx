import { BiChevronRightCircle } from "react-icons/bi";

import BreadCrumb from "../../UI/BreadCrumb/BreadCrumb";

import { Breadcrumb } from "../../../types/BreadCrumb";

import styles from "./BreadCrumbsList.module.css";

interface Props {
  breadcrumbs: Breadcrumb[];
}

const BreadCrumbsList = (props: Props) => {
  const { breadcrumbs = [] } = props;

  const renderBreadcrumbsList = () => {
    return breadcrumbs.map((breadcrumb, index) => (
      <li className={styles.listItem} key={index}>
        <BreadCrumb href={breadcrumb.href}>{breadcrumb.name}</BreadCrumb>

        {index !== breadcrumbs.length - 1 && (
          <BiChevronRightCircle className={styles.icon} />
        )}
      </li>
    ));
  };

  return <ul className={styles.list}>{renderBreadcrumbsList()}</ul>;
};

export default BreadCrumbsList;
