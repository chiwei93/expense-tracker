import { ReactNode } from "react";

import styles from "./Form.module.css";

interface Props {
  children: ReactNode;
}

const Form = (props: Props) => {
  const { children } = props;

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      {children}
    </form>
  );
};

export default Form;