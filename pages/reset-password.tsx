import { NextPage } from "next";

import { useId } from "react";

import Form from "../components/UI/Form/Form";
import PasswordInput from "../components/UI/Inputs/PasswordInput/PasswordInput";
import FilledOutlineButton from "../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";
import FormLink from "../components/UI/Links/FormLink/FormLink";

import styles from "../styles/ResetPassword.module.css";

const ResetPassword: NextPage = () => {
  const newPasswordInputId = useId();
  const confirmNewPasswordInputId = useId();

  const onFormSubmit = () => {};

  return (
    <Form handleOnSubmit={onFormSubmit} style={{ margin: "4em 0" }}>
      <p className={styles.logo}>ExpTrack</p>

      <p className={styles.heading}>Reset password</p>

      <div className={styles.formControl}>
        <PasswordInput
          labelText="new password"
          errorText="Please provide a valid password"
          hasError={false}
          id={`newPassword-${newPasswordInputId}`}
        />
      </div>

      <div className={styles.formControl}>
        <PasswordInput
          labelText="confirm new password"
          errorText="Passwords provided does not match"
          hasError={false}
          id={`confirmNewPassword-${confirmNewPasswordInputId}`}
        />
      </div>

      <div className={styles.btnContainer}>
        <FilledOutlineButton>reset password</FilledOutlineButton>
      </div>

      <p className={styles.lastRow}>
        Already have an account?{" "}
        <span>
          <FormLink href="/">Log in</FormLink>
        </span>
      </p>
    </Form>
  );
};

export default ResetPassword;
