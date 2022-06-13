import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import cls from "classnames";

import styles from "./LightDarkModeBtn.module.css";

interface Props {}

const LightDarkModeBtn = (props: Props) => {
  const {} = props;

  const [isDarkMode, setIsDarkMode] = useState(false);

  const setLightAndDarkClass = () => {};

  return (
    <button
      className={cls(styles.btn)}
      onClick={() => setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode)}
    ></button>
  );
};

export default LightDarkModeBtn;
