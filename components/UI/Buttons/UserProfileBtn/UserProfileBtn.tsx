import Link from "next/link";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

import styles from "./UserProfileBtn.module.css";

interface Props {}

const UserProfileBtn = (props: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.profileBtn}
        onClick={() => setShowDropdown((prevShowDropdown) => !prevShowDropdown)}
      >
        <BiUserCircle />
      </button>

      {showDropdown && (
        <div className={styles.optionsListContainer}>
          <ul className={styles.optionsList}>
            <li>
              <Link href="/profile">
                <a className={styles.option}>Your profile</a>
              </Link>
            </li>
            <li>
              <button className={styles.option}>Log out</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileBtn;
