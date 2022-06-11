import styles from "./Checkbox.module.css";

interface Props {
  id: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Checkbox = (props: Props) => {
  const { id, style = {}, children } = props;

  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        style={style}
        id={id}
        name={id}
        className={styles.input}
      />
      <label htmlFor={id} className={styles.label}>
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
