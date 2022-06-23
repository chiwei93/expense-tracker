import type { NextPage } from "next";

import BreadCrumbsList from "../../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import MonthPicker from "../../components/UI/Inputs/MonthPicker/MonthPicker";

import styles from "../../styles/Transactions.module.css";

const Transactions: NextPage = () => {
  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "transactions", href: "/transactions" },
  ];

  return (
    <>
      <BreadCrumbsList breadcrumbs={breadcrumbs} />

      <div className={styles.headContainer}>
        <h1 className={styles.transactionHeading}>Transactions</h1>

        <MonthPicker />
      </div>
    </>
  );
};

export default Transactions;
