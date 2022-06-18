import cls from "classnames";

import styles from "./FilledOutlineButton.module.css";

interface Props {
  btnType?: "submit" | "button" | "reset";
  handleClick?: () => void;
  children: React.ReactNode;
  btnDesignType?: "outline" | "filled";
}

const FilledButton = (props: Props) => {
  const {
    btnType = "submit",
    handleClick = () => {},
    children,
    btnDesignType = "filled",
  } = props;

  const getBtnDesignClass = () => {
    return btnDesignType === "filled" ? styles.filled : styles.outline;
  };

  return (
    <button
      className={cls(styles.btn, getBtnDesignClass())}
      type={btnType}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
};

export default FilledButton;
