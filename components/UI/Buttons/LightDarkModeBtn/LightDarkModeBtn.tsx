import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import cls from "classnames";

import styles from "./LightDarkModeBtn.module.css";

interface Props {}

const LightDarkModeBtn = (props: Props) => {
  const {} = props;

  const [isDarkMode, setIsDarkMode] = useState(false);

  const setLightAndDarkClass = () => {
    return isDarkMode ? styles.dark : styles.light;
  };

  const renderIcon = () => {
    return isDarkMode ? (
      <BiMoon className={styles.moonIcon} />
    ) : (
      <BiSun className={styles.sunIcon} />
    );
  };

  return (
    <button
      className={cls(styles.btn, setLightAndDarkClass())}
      onClick={() => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)}
    >
      {renderIcon()}
    </button>
  );
};

export default LightDarkModeBtn;
