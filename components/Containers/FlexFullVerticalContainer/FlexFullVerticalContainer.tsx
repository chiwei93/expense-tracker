import styles from "./FlexFullVerticalContainer.module.css";

interface Props {
  children: React.ReactNode;
}

const FlexFullVerticalContainer = (props: Props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};

export default FlexFullVerticalContainer;
