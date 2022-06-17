import type { NextPage } from "next";

import cls from "classnames";

import BreadCrumbsList from "../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import DashboardTransactionItem from "../components/DashboardPage/DashboardTransactionItem/DashboardTransactionItem";

import styles from "../styles/Dashboard.module.css";

const Dashboard: NextPage = () => {
  const breadcrumbs = [{ name: "Dashboard", href: '/dashboard' }];

  return (
    <>
      <BreadCrumbsList breadcrumbs={breadcrumbs} />

      <p className={styles.welcomeBackText}>
        Welcome back, <span className={styles.userName}>John</span>
      </p>

      <div className={styles.sectionDividerContainer}>
        <div className={styles.leftSectionsContainer}>
          <h1 className={styles.expensesHeading}>Expenses</h1>

          <div className={styles.expensesChartContainer}>chart container</div>

          <ul className={styles.statsList}>
            <li className={styles.statsItem}>
              <span className={cls(styles.stat, styles.red)}>$1000.00</span>
              <span className={styles.statLabel}>Month&#39;s Expenses</span>
            </li>

            <li className={styles.statsItem}>
              <span className={cls(styles.stat, styles.green)}>$1000.00</span>
              <span className={styles.statLabel}>Month&#39;s Income</span>
            </li>

            <li className={styles.statsItem}>
              <span className={cls(styles.stat, styles.primary)}>$1000.00</span>
              <span className={styles.statLabel}>Month&#39;s Balance</span>
            </li>
          </ul>

          <h1 className={styles.recentTransactionsHeading}>
            Recent Transactions
          </h1>

          <ul className={styles.transactionsList}>
            <li className={styles.transactionItem}>
              <DashboardTransactionItem />
            </li>
          </ul>
        </div>

        <div className={styles.rightSectionsContainer}>
          <h1 className={styles.summaryHeading}>Summary</h1>

          <p className={styles.summaryTitle}>
            Where did you spend your money on?
          </p>

          <ul className={styles.summaryList}>
            <li className={styles.summaryItem}>
              <span className={styles.category}>Food</span>
              <span className={styles.categorySpending}>$1000.00</span>
            </li>

            <li className={styles.summaryItem}>
              <span className={styles.category}>Food</span>
              <span className={styles.categorySpending}>$100.00</span>
            </li>

            <li className={styles.summaryItem}>
              <span className={styles.category}>Food</span>
              <span className={styles.categorySpending}>$10.00</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
