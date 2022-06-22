import { useState, useRef } from "react";
import ReactDatePicker from "react-datepicker";
import cls from "classnames";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";

interface Props {
  labelText: string;
}

const DatePicker = (props: Props) => {
  const { labelText } = props;

  const isDirty = useRef(false);
  const [startDate, setStartDate] = useState<Date | null>(null);

  const onDateChange = (date: Date | null) => {
    isDirty.current = true;
    setStartDate(date);
  };

  const getDirtyClass = () => {
    return isDirty.current ? styles.isDirty : null;
  };

  return (
    <div className={cls(styles.container, getDirtyClass())}>
      <span className={styles.label}>{labelText}</span>
      <ReactDatePicker
        selected={startDate}
        onChange={onDateChange}
        className={styles.datePicker}
      />
    </div>
  );
};

export default DatePicker;
