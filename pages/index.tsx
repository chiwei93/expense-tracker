import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useId } from "react";

import FilledOutlineButton from "../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";
import Form from "../components/UI/Form/Form";
import Checkbox from "../components/UI/Inputs/Checkbox/Checkbox";
import PasswordInput from "../components/UI/Inputs/PasswordInput/PasswordInput";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";
import FormLink from "../components/UI/Links/FormLink/FormLink";
import { useAppDispatch } from "../store";

import { login } from "../store/reducers/authSlice";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const emailInputId = useId();
  const passwordInputId = useId();
  const rememberMeId = useId();

  const onFormSubmit = () => {
    // validate user input
    dispatch(login());
    router.replace("/dashboard");
  };

  return (
    <Form handleOnSubmit={onFormSubmit} style={{ margin: "4em 0" }}>
      <p className={styles.logo}>ExpTrack</p>

      <p className={styles.heading}>Welcome back</p>

      <div className={styles.formControl}>
        <TextInput
          labelText="Email"
          inputType="email"
          errorText="Please provide a valid email"
          hasError={false}
          id={`email-${emailInputId}`}
        />
      </div>

      <div className={styles.formControl}>
        <PasswordInput
          labelText="Password"
          errorText="Please provide a valid password"
          hasError={false}
          id={`password-${passwordInputId}`}
        />
      </div>

      <div className={styles.row}>
        <Checkbox id={`rememberMe-${rememberMeId}`}>Remember me</Checkbox>

        <FormLink href="/forgot-password">Forgot your password?</FormLink>
      </div>

      <div className={styles.btnContainer}>
        <FilledOutlineButton>Login</FilledOutlineButton>
      </div>

      <p className={styles.lastRow}>
        Don&apos;t have an account yet?{" "}
        <span>
          <FormLink href="/signup">Sign Up</FormLink>
        </span>
      </p>
    </Form>
  );
};

export default Home;
