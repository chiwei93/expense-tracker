import Link from "next/link";

import styles from "./SidebarLink.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
}

const SidebarLink = (props: Props) => {
  const { href, children } = props;

  return (
    <Link href={href}>
      <a className={styles.link}>{children}</a>
    </Link>
  );
};

export default SidebarLink;
