import styles from "./FilledButton.module.css";

interface Props {
  btnType?: "submit" | "button" | "reset";
  handleClick?: () => void;
  children: React.ReactNode;
}

const FilledButton = (props: Props) => {
  const { btnType = "submit", handleClick = () => {}, children } = props;

  return (
    <button className={styles.btn} type={btnType} onClick={() => handleClick()}>
      {children}
    </button>
  );
};

export default FilledButton;
