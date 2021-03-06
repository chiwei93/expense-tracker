import { FOOD_ICON } from "../../../shared/icons";
import CategoryIcon from "../../UI/CategoryIcon/CategoryIcon";

import styles from "./DashboardTransactionItem.module.css";

interface Props {}

const DashboardTransactionItem = (props: Props) => {
  const {} = props;

  return (
    <article className={styles.container}>
      <div className={styles.iconContainer}>
        <CategoryIcon type={FOOD_ICON} />
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.title}>Food</span>
        <span className={styles.date}>01 March 2021, 10:35am</span>
      </div>
      <div className={styles.priceContainer}>$1000.00</div>
    </article>
  );
};

export default DashboardTransactionItem;
