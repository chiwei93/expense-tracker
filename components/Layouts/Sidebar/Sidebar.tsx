import { useRef } from "react";
import Link from "next/link";
import { MdDashboard, MdOutlineInsertChartOutlined } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiDollarCircle, BiFolderPlus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import cls from "classnames";

import SidebarLink from "../../UI/Links/SidebarLink/SidebarLink";

import useIsomorphicLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";

import { TABLET_BREAKPOINT } from "../../../shared/constants";

import styles from "./Sidebar.module.css";

interface Props {
  handleSidebarWidthChange: (width: number) => void;
}

const Sidebar = (props: Props) => {
  const { handleSidebarWidthChange } = props;

  const sidebarNavRef = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const handleWidthChange = () => {
      if (sidebarNavRef.current) {
        if (window.innerWidth >= TABLET_BREAKPOINT) {
          handleSidebarWidthChange(sidebarNavRef.current?.offsetWidth);
        } else {
          handleSidebarWidthChange(0);
        }
      }
    };

    handleWidthChange();
    window.addEventListener("resize", handleWidthChange);

    return () => {
      window.removeEventListener("resize", handleWidthChange);
      handleSidebarWidthChange(0);
    };
  }, [handleSidebarWidthChange]);

  return (
    <nav
      aria-label="secondary navigation"
      className={styles.nav}
      ref={sidebarNavRef}
    >
      <ul className={styles.iconBtnList}>
        <li
          className={cls(
            styles.iconBtnItem,
            styles.tabletBtnItem,
            styles.logoRow
          )}
        >
          <Link href="/dashboard">
            <a className={styles.logo}>ExpTrack</a>
          </Link>
        </li>

        <li className={cls(styles.iconBtnItem, styles.tabletBtnItem)}>
          <SidebarLink href="/transactions/add">
            <BiFolderPlus />
            <span className={styles.iconBtnLabel}>Add Transaction</span>
          </SidebarLink>
        </li>

        <li className={styles.iconBtnItem}>
          <SidebarLink href="/dashboard">
            <MdDashboard />
            <span className={styles.iconBtnLabel}>Dashboard</span>
          </SidebarLink>
        </li>

        <li className={cls(styles.iconBtnItem, styles.tabletBtnItem)}>
          <SidebarLink href="/categories">
            <FaBoxes />
            <span className={styles.iconBtnLabel}>Categories</span>
          </SidebarLink>
        </li>

        <li className={styles.iconBtnItem}>
          <SidebarLink href="/transactions">
            <BiDollarCircle />
            <span className={styles.iconBtnLabel}>Transactions</span>
          </SidebarLink>
        </li>

        <li className={cls(styles.iconBtnItem, styles.mobileBtnItem)}>
          <Link href="/transactions/add">
            <a className={styles.plusBtn}>
              <BsPlusLg />
            </a>
          </Link>
        </li>

        <li className={styles.iconBtnItem}>
          <SidebarLink href="/summary">
            <MdOutlineInsertChartOutlined />
            <span className={styles.iconBtnLabel}>Summary</span>
          </SidebarLink>
        </li>

        <li className={styles.iconBtnItem}>
          <SidebarLink href="/settings">
            <IoSettingsOutline />
            <span className={styles.iconBtnLabel}>Settings</span>
          </SidebarLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
