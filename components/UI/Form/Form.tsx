import { ReactNode } from "react";

import styles from "./Form.module.css";

interface Props {
  handleOnSubmit: () => void;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Form = (props: Props) => {
  const { handleOnSubmit, children, style = {} } = props;

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleOnSubmit();
  };

  return (
    <form className={styles.form} onSubmit={onFormSubmit} style={style}>
      {children}
    </form>
  );
};

export default Form;
