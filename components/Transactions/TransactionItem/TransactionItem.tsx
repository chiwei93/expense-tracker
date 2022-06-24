import { useState, useEffect } from "react";
import { BsWallet2, BsThreeDots, BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { FaTrash, FaPen } from "react-icons/fa";
import cls from "classnames";

import { TABLET_BREAKPOINT } from "../../../shared/constants";

import styles from "./TransactionItem.module.css";

interface Props {
  type: string;
}

const TransactionItem = (props: Props) => {
  const { type } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= TABLET_BREAKPOINT) {
        setShowDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderIcon = () => {
    switch (type) {
      case "expense":
        return (
          <div className={cls(styles.expense, styles.circle)}>
            <BsWallet2 className={styles.icon} />
          </div>
        );
      case "income":
        return (
          <div className={cls(styles.income, styles.circle)}>
            <AiOutlineMoneyCollect className={styles.icon} />
          </div>
        );
      default:
        return (
          <div className={cls(styles.unknown, styles.circle)}>
            <BsQuestionCircle className={styles.icon} />
          </div>
        );
    }
  };

  return (
    <div className={styles.container} onClick={() => setShowDropdown(false)}>
      <div className={styles.iconColumn}>{renderIcon()}</div>

      <div className={cls(styles.mobile, styles.column)}>
        <span className={styles.title}>Rice Container</span>
        <span className={styles.category}>Household good</span>
      </div>

      <div className={cls(styles.tablet, styles.column)}>
        <span className={styles.label}>title</span>
        <span className={styles.value}>rice container</span>
      </div>

      <div className={cls(styles.tablet, styles.column)}>
        <span className={styles.label}>category</span>
        <span className={styles.value}>household good</span>
      </div>

      <div className={cls(styles.desktop, styles.column)}>
        <span className={styles.label}>time</span>
        <span className={styles.value}>20 March 2022</span>
      </div>

      <div className={cls(styles.tablet, styles.column)}>
        <span className={styles.label}>amount</span>
        <span className={styles.value}>$1000.00</span>
      </div>

      <div className={cls(styles.tablet, styles.column, styles.btnContainer)}>
        <button className={cls(styles.btn, styles.edit)}>
          <FaPen className={cls(styles.icon)} />
        </button>

        <button className={cls(styles.btn, styles.delete)}>
          <FaTrash className={cls(styles.icon)} />
        </button>
      </div>

      <div
        className={cls(styles.mobile, styles.column, styles.mobileBtnColumn)}
      >
        <button
          className={styles.btnMore}
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown((prevShowDropdown) => !prevShowDropdown);
          }}
        >
          <BsThreeDots className={cls(styles.icon, styles.moreIcon)} />

          {showDropdown && (
            <div className={styles.dropdown}>
              <span className={styles.dropdownOption}>edit</span>
              <span className={styles.dropdownOption}>delete</span>
            </div>
          )}
        </button>

        <span className={styles.totalAmount}>$10000.00</span>
      </div>
    </div>
  );
};

export default TransactionItem;
