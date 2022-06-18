import cls from "classnames";

import { SettingOption } from "../../../types/SettingOption";

import { useAppSelector, useAppDispatch } from "../../../store";
import { UIState, setSetting } from "../../../store/reducers/uiSlice";

import styles from "./SettingItem.module.css";

interface Props {
  labelText: string;
  options: SettingOption[];
  property: string;
}

const SettingItem = (props: Props) => {
  const { labelText, options, property } = props;

  const dispatch = useAppDispatch();
  const settingProperty = useAppSelector(
    (state) => state.ui[property as keyof UIState]
  );

  const getActiveClass = (value: string) => {
    return settingProperty === value ? styles.active : null;
  };

  const onBtnClick = (value: string) => {
    dispatch(setSetting({ property: property as keyof UIState, value }));
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}>{labelText}</span>

      <ul className={styles.optionsList}>
        {options.map((option, index) => (
          <li className={styles.optionItem} key={index}>
            <button
              type="button"
              className={cls(styles.btn, getActiveClass(option.value))}
              onClick={() => onBtnClick(option.value)}
            >
              {option.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingItem;
