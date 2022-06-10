import styles from "./Checkbox.module.css";

interface Props {
  id: string;
  labelText: string;
  style?: React.CSSProperties;
}

const Checkbox = (props: Props) => {
  const { style = {} } = props;

  return (
    <div>
      <input type="checkbox" style={style} />
      <label htmlFor="">checkbox label</label>
    </div>
  );
};

export default Checkbox;
