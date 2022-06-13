import { useState } from "react";
import { BiChevronDownCircle } from "react-icons/bi";

import styles from "./TopNavSelectBtn.module.css";

interface Props {}

const TopNavSelectBtn = (props: Props) => {
  const {} = props;

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div
      className={styles.container}
      onClick={() => setShowOptions((prevShowOptions) => !prevShowOptions)}
    >
      <button className={styles.selectBtn}>
        <span>Project name</span>
        <span className={styles.icon}>
          <BiChevronDownCircle />
        </span>
      </button>

      {showOptions && (
        <div className={styles.optionsContainer}>
          <ul className={styles.optionsList}>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
            <li className={styles.option}>option 1</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default TopNavSelectBtn;
