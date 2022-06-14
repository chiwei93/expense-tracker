import Link from "next/link";

import styles from "./BreadCrumb.module.css";

interface Props {
  children: React.ReactNode;
}

const BreadCrumb = (props: Props) => {
  const { children } = props;

  return (
    <Link href="">
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default BreadCrumb;
