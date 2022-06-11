import { ReactNode } from "react";

import styles from "./Form.module.css";

interface Props {
  handleOnSubmit: () => void;
  children: ReactNode;
}

const Form = (props: Props) => {
  const { handleOnSubmit, children } = props;

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnSubmit();
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};

export default Form;