import Link from "next/link";
import { useRouter } from "next/router";
import cls from "classnames";

import styles from "./SidebarLink.module.css";

interface Props {
  href: string;
  children: React.ReactNode;
}

const SidebarLink = (props: Props) => {
  const { href, children } = props;

  const router = useRouter();

  const getActiveClass = () => {
    return router.asPath === href ? styles.active : null;
  };

  return (
    <Link href={href}>
      <a className={cls(styles.link, getActiveClass())}>{children}</a>
    </Link>
  );
};

export default SidebarLink;
