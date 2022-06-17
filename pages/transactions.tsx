import type { NextPage } from "next";

import BreadCrumbsList from "../components/Layouts/BreadCrumbsList/BreadCrumbsList";

import styles from "../styles/Transactions.module.css";

const Transactions: NextPage = () => {
  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "transactions", href: '/transactions' },
  ];

  return (
    <>
      <BreadCrumbsList breadcrumbs={breadcrumbs} />
    </>
  );
};

export default Transactions;
