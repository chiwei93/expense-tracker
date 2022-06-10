import cls from "classnames";

import styles from "./TextInput.module.css";

interface Props {
  labelText: string;
  id: string;
  errorText?: string;
  hasError?: boolean;
  inputType?: string;
  required?: boolean;
  hasIcon?: boolean;
  children?: React.ReactNode;
}

const TextInput = (props: Props) => {
  const {
    labelText,
    errorText = "Invalid value",
    hasError = false,
    inputType = "text",
    required = true,
    hasIcon = false,
    children,
    id
  } = props;

  const determineHasIconClass = () => {
    return hasIcon ? styles.hasIcon : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type={inputType}
          className={cls(styles.input, determineHasIconClass())}
          required={required}
          placeholder=" "
          id={id}
          name={id}
        />

        <label htmlFor={id} className={styles.label}>
          {labelText}
        </label>

        {hasIcon && <div className={styles.iconContainer}>{children}</div>}
      </div>

      {hasError && <p className={styles.error}>{errorText}</p>}
    </div>
  );
};

export default TextInput;
