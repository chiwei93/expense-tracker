import { NextPage } from "next";

import BreadCrumbsList from "../../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import TransactionItem from "../../components/Transactions/TransactionItem/TransactionItem";
import TransactionSection from "../../components/Transactions/TransactionSection/TransactionSection";
import MonthPicker from "../../components/UI/Inputs/MonthPicker/MonthPicker";

import styles from '../../styles/Summary.module.css'

const Summary: NextPage = () => {
  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "summary", href: "/summary" },
  ];

  return (
    <>
      <BreadCrumbsList breadcrumbs={breadcrumbs} />

      <div className={styles.headContainer}>
        <h1 className={styles.summaryHeading}>Summary</h1>

        <MonthPicker />
      </div>

      <div>charts</div>

      <ul className={styles.categoryList}>
        <li className={styles.categoryItem}>
          <TransactionSection categoryLabel="20 March 2022" totalAmount={1000}>
            <li className={styles.transactionItem}>
              <TransactionItem type="expense" />
            </li>

            <li className={styles.transactionItem}>
              <TransactionItem type="expense" />
            </li>

            <li className={styles.transactionItem}>
              <TransactionItem type="expense" />
            </li>

            <li className={styles.transactionItem}>
              <TransactionItem type="expense" />
            </li>
          </TransactionSection>
        </li>
      </ul>
    </>
  )
}

export default Summary;