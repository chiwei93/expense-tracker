import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";

import { logout } from "../../../../store/reducers/authSlice";
import { useAppDispatch } from "../../../../store";

import styles from "./UserProfileBtn.module.css";

interface Props {}

const UserProfileBtn = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showDropdown, setShowDropdown] = useState(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const onLogoutBtnClick = () => {
    dispatch(logout());
    closeDropdown();
    router.replace("/");
  };

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
                <a className={styles.option} onClick={() => closeDropdown()}>
                  Your profile
                </a>
              </Link>
            </li>
            <li>
              <button className={styles.option} onClick={onLogoutBtnClick}>
                Log out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileBtn;
