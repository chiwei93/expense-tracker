import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import cls from "classnames";

import {
  shortenAndCapitalizeString,
  captitalizeString,
} from "../../../../utils/stringUtils";

import styles from "./SelectInput.module.css";

type TransactionType = { name: string; value: string };

interface Props {
  displayText: string;
  options: TransactionType[];
}

const SelectInput = (props: Props) => {
  const { options, displayText } = props;
  const maxStringLength = 28;

  const [showDropdown, setShowDropdown] = useState(false);
  const [textDisplayed, setTextDisplayed] = useState(
    shortenAndCapitalizeString(displayText, maxStringLength)
  );

  const getActiveClass = () => {
    return showDropdown ? styles.active : null;
  };

  const onOptionClick = (value: string) => {
    setShowDropdown(false);
    setTextDisplayed(shortenAndCapitalizeString(value, maxStringLength));
  };

  return (
    <div className={styles.container}>
      <div
        className={cls(styles.selectInput, getActiveClass())}
        onClick={() => setShowDropdown((prevShowDropdown) => !prevShowDropdown)}
      >
        <span className={styles.selectText}>{textDisplayed}</span>

        {showDropdown ? (
          <FiChevronUp className={styles.icon} />
        ) : (
          <FiChevronDown className={styles.icon} />
        )}

        {showDropdown && (
          <div
            className={styles.optionsContainer}
            onClick={(e) => e.stopPropagation()}
          >
            {options.map((option, index) => (
              <span
                className={styles.option}
                key={index}
                onClick={() => onOptionClick(option.value)}
              >
                {captitalizeString(option.name)}{" "}
                <GiCheckMark className={styles.checkIcon} />
              </span>
            ))}
          </div>
        )}
      </div>

      {/* <span className={styles.error}>error text</span> */}
    </div>
  );
};

export default SelectInput;
