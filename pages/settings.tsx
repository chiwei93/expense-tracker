import type { NextPage } from "next";

import FlexFullVerticalContainer from "../components/Containers/FlexFullVerticalContainer/FlexFullVerticalContainer";
import BreadCrumbsList from "../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import SettingItem from "../components/Settings/SettingItem/SettingItem";
import FilledOutlineButton from "../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";

import styles from "../styles/Settings.module.css";

const Settings: NextPage = () => {
  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "settings", href: "/settings" },
  ];

  const settings = [
    {
      label: "theme",
      property: "theme",
      options: [
        { name: "light", value: "light" },
        { name: "dark", value: "dark" },
      ],
    },
  ];

  return (
    <FlexFullVerticalContainer>
      <div className={styles.container}>
        <BreadCrumbsList breadcrumbs={breadcrumbs} />

        <h1 className={styles.heading}>Settings</h1>

        <ul className={styles.settingsList}>
          {settings.map((setting, index) => (
            <li className={styles.settingItem} key={index}>
              <SettingItem
                labelText={setting.label}
                options={setting.options}
                property={setting.property}
              />
            </li>
          ))}
        </ul>

        <div className={styles.btnContainer}>
          <FilledOutlineButton btnType="button">Save</FilledOutlineButton>

          <FilledOutlineButton btnType="button" btnDesignType="outline">
            Cancel
          </FilledOutlineButton>
        </div>
      </div>
    </FlexFullVerticalContainer>
  );
};

export default Settings;
