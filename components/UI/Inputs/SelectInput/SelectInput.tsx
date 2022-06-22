import { useState, useRef } from "react";
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
  labelText: string;
  options: TransactionType[];
  hasError?: boolean;
  errorText?: string;
}

const SelectInput = (props: Props) => {
  const { options, labelText, hasError = false, errorText = "" } = props;
  const maxStringLength = 28;

  const [showDropdown, setShowDropdown] = useState(false);
  const [textDisplayed, setTextDisplayed] = useState("");
  const isDirty = useRef(false);

  const getActiveClass = () => {
    return showDropdown ? styles.active : null;
  };

  const getIsDirtyClass = () => {
    return isDirty.current ? styles.isDirty : null;
  };

  const onOptionClick = (value: string) => {
    isDirty.current = true;
    setShowDropdown(false);
    setTextDisplayed(shortenAndCapitalizeString(value, maxStringLength));
  };

  const onSelectInputClick = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  return (
    <div className={styles.container}>
      <div
        className={cls(styles.selectInput, getActiveClass(), getIsDirtyClass())}
        onClick={onSelectInputClick}
      >
        <span className={styles.label}>{labelText}</span>

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

      {hasError && <span className={styles.error}>{errorText}</span>}
    </div>
  );
};

export default SelectInput;
