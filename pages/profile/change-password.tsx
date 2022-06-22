import type { NextPage } from "next";

import { useId } from "react";
import cls from "classnames";

import FlexFullVerticalContainer from "../../components/Containers/FlexFullVerticalContainer/FlexFullVerticalContainer";
import BreadCrumbsList from "../../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import Form from "../../components/UI/Form/Form";
import FilledOutlineButton from "../../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";
import PasswordInput from "../../components/UI/Inputs/PasswordInput/PasswordInput";

import styles from "../../styles/ChangePassword.module.css";

const ChangePassword: NextPage = () => {
  const oldPasswordInputId = useId();
  const newPasswordInputId = useId();
  const confirmNewPasswordInputId = useId();

  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "your profile", href: "/profile" },
    { name: "change password", href: "/profile/change-password" },
  ];

  const onFormSubmit = () => {};

  return (
    <FlexFullVerticalContainer>
      <Form handleOnSubmit={onFormSubmit}>
        <BreadCrumbsList breadcrumbs={breadcrumbs} />

        <h1 className={styles.heading}>Your Profile</h1>

        <div className={styles.formControl}>
          <PasswordInput
            labelText="First Name"
            id={`oldPassword-${oldPasswordInputId}`}
          />
        </div>

        <div className={styles.formControl}>
          <PasswordInput
            labelText="Last Name"
            id={`newPassword-${newPasswordInputId}`}
          />
        </div>

        <div className={styles.formControl}>
          <PasswordInput
            labelText="confirm new password"
            id={`confirmNewPassword-${confirmNewPasswordInputId}`}
          />
        </div>

        <div className={styles.btnContainer}>
          <FilledOutlineButton>Save</FilledOutlineButton>

          <FilledOutlineButton btnDesignType="outline" btnType="button">
            Cancel
          </FilledOutlineButton>
        </div>
      </Form>
    </FlexFullVerticalContainer>
  );
};

export default ChangePassword;
