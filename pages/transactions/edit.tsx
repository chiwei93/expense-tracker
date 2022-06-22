import type { NextPage } from "next";
import { useId } from "react";

import FlexFullVerticalContainer from "../../components/Containers/FlexFullVerticalContainer/FlexFullVerticalContainer";
import BreadCrumbsList from "../../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import FilledOutlineButton from "../../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";
import Form from "../../components/UI/Form/Form";
import DatePicker from "../../components/UI/Inputs/DatePicker/DatePicker";
import SelectInput from "../../components/UI/Inputs/SelectInput/SelectInput";
import TextInput from "../../components/UI/Inputs/TextInput/TextInput";

import styles from "../../styles/EditTransaction.module.css";

const EditTransaction: NextPage = () => {
  const titleInputId = useId();
  const amountInputId = useId();

  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "transactions", href: "/transactions" },
    { name: "edit transaction", href: "/transactions/edit" },
  ];

  const transactionType = [
    { name: "expense", value: "expense" },
    { name: "income", value: "income" },
  ];

  const categories = [{ name: "household", value: "household" }];

  const onFormSubmit = () => {};

  return (
    <FlexFullVerticalContainer>
      <Form handleOnSubmit={onFormSubmit} style={{ margin: "4em 0" }}>
        <BreadCrumbsList breadcrumbs={breadcrumbs} />

        <h1 className={styles.heading}>Edit transaction</h1>

        <div className={styles.formControl}>
          <TextInput labelText="Title" id={`title-${titleInputId}`} />
        </div>

        <div className={styles.formControl}>
          <SelectInput options={transactionType} labelText="Type" />
        </div>

        <div className={styles.formControl}>
          <SelectInput options={categories} labelText="Category" />
        </div>

        <div className={styles.formControl}>
          <DatePicker labelText="Date" />
        </div>

        <div className={styles.formControl}>
          <TextInput
            labelText="amount"
            id={`amount-${amountInputId}`}
            inputType="number"
          />
        </div>

        <div className={styles.btnContainer}>
          <FilledOutlineButton>
            Edit
          </FilledOutlineButton>
        </div>
      </Form>
    </FlexFullVerticalContainer>
  );
};

export default EditTransaction;
