import styles from "./TransactionSection.module.css";

interface Props {
  categoryLabel: string;
  totalAmount: number;
  children?: React.ReactNode;
}

const TransactionSection = (props: Props) => {
  const { categoryLabel, totalAmount, children } = props;

  return (
    <div>
      <div className={styles.header}>
        <span className={styles.category}>{categoryLabel}</span>
        <span className={styles.totalAmount}>${totalAmount.toFixed(2)}</span>
      </div>

      <ul>{children}</ul>
    </div>
  );
};

export default TransactionSection;
