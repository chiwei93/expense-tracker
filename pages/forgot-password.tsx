import { NextPage } from "next";

import { useId } from "react";
import FilledOutlineButton from "../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";

import Form from "../components/UI/Form/Form";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";
import FormLink from "../components/UI/Links/FormLink/FormLink";

import styles from '../styles/ForgotPassword.module.css'

const ForgotPassword: NextPage = () => {
  const emailInputId = useId();

  const onFormSubmit = () => {

  };

  return (
    <Form handleOnSubmit={onFormSubmit}>
      <p className={styles.logo}>ExpTrack</p>

      <p className={styles.heading}>Send link to email</p>

      <div className={styles.formControl}>
        <TextInput
          labelText="Email"
          inputType="email"
          errorText="Please provide a valid email"
          hasError={false}
          id={`email-${emailInputId}`}
        />
      </div>

      <div className={styles.btnContainer}>
        <FilledOutlineButton>Send link</FilledOutlineButton>
      </div>

      <p className={styles.lastRow}>
        Already have an account?{" "}
        <span>
          <FormLink href="/">Log in</FormLink>
        </span>
      </p>
    </Form>
  )
}

export default ForgotPassword;