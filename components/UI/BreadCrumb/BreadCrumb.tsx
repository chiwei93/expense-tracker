import Link from "next/link";

import styles from "./BreadCrumb.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
}

const BreadCrumb = (props: Props) => {
  const { children, href } = props;

  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default BreadCrumb;
