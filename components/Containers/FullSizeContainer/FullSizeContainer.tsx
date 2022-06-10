import styles from "./FullSizeContainer.module.css";

interface Props {
  children: React.ReactNode;
}

const FullSizeContainer = (props: Props) => {
  const { children } = props;

  return <main className={styles.container}>{children}</main>;
};

export default FullSizeContainer;
