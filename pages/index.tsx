import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useState, useId } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import FilledButton from "../components/UI/Buttons/FilledButton/FilledButton";
import Form from "../components/UI/Form/Form";
import Checkbox from "../components/UI/Inputs/Checkbox/Checkbox";
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

  const [showPassword, setShowPassword] = useState(false);

  const onFormSubmit = () => {
    // validate user input
    dispatch(login());
    router.replace("/dashboard");
  };

  return (
    <div className={styles.formContainer}>
      <Form handleOnSubmit={onFormSubmit}>
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
          <TextInput
            labelText="Password"
            inputType={showPassword ? "text" : "password"}
            errorText="Please provide a valid password"
            hasError={false}
            hasIcon={true}
            id={`password-${passwordInputId}`}
          >
            <button
              onClick={() =>
                setShowPassword((prevShowPassword) => !prevShowPassword)
              }
              type="button"
              className={styles.iconBtn}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </TextInput>
        </div>

        <div className={styles.row}>
          <Checkbox id={`rememberMe-${rememberMeId}`}>Remember me</Checkbox>

          <FormLink href="/forgot-password">Forgot your password?</FormLink>
        </div>

        <div className={styles.btnContainer}>
          <FilledButton>Login</FilledButton>
        </div>

        <p className={styles.lastRow}>
          Don&apos;t have an account yet?{" "}
          <span>
            <FormLink href="/signup">Sign Up</FormLink>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Home;
