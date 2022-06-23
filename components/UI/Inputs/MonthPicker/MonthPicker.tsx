import { useState } from "react";
import { BiChevronDownCircle } from "react-icons/bi";
import cls from "classnames";

import styles from "./MonthPicker.module.css";

interface Props {}

const MonthPicker = (props: Props) => {
  const {} = props;

  const dateObj = new Date();
  const currentMonth = dateObj.getMonth();
  const currentYear = dateObj.getFullYear();
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState(
    `${months[currentMonth]} ${currentYear}`
  );

  const onBtnClick = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const onOptionClick = (month: string, year: number) => {
    setInputValue(`${month} ${year}`);
    setShowDropdown(false);
  };

  return (
    <button type="button" className={styles.btn} onClick={onBtnClick}>
      {inputValue}
      <BiChevronDownCircle className={styles.btnIcon} />
      {showDropdown && (
        <div className={styles.dropdown} onClick={(e) => e.stopPropagation()}>
          {months.map((month, index) => (
            <span
              className={styles.option}
              key={index}
              onClick={() => onOptionClick(month, currentYear)}
            >{`${month} ${currentYear}`}</span>
          ))}
        </div>
      )}
    </button>
  );
};

export default MonthPicker;
