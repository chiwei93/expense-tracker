import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useId } from "react";
import cls from "classnames";

import Form from "../components/UI/Form/Form";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";
import Checkbox from "../components/UI/Inputs/Checkbox/Checkbox";
import FormLink from "../components/UI/Links/FormLink/FormLink";
import FilledOutlineButton from "../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";
import PasswordInput from "../components/UI/Inputs/PasswordInput/PasswordInput";

import { useAppDispatch } from "../store";
import { login } from "../store/reducers/authSlice";

import styles from "../styles/Signup.module.css";

const Signup: NextPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const firstNameInputId = useId();
  const lastNameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();
  const agreeTermAndPrivacyInputId = useId();

  const onFormSubmit = () => {
    // validate user input
    dispatch(login());
    router.replace("/dashboard");
  };

  return (
    <Form handleOnSubmit={onFormSubmit} style={{ margin: "4em 0" }}>
      <p className={styles.logo}>ExpTrack</p>

      <p className={styles.heading}>Get&apos;s started</p>

      <div className={cls(styles.formControl, styles.columns2)}>
        <TextInput
          id={`firstName-${firstNameInputId}`}
          labelText="First Name"
          errorText="Please provide a valid first name"
        />

        <TextInput
          id={`lastName-${lastNameInputId}`}
          labelText="Last Name"
          errorText="Please provide a valid last name"
        />
      </div>

      <div className={styles.formControl}>
        <TextInput
          id={`email-${emailInputId}`}
          labelText="Email"
          errorText="Please provide a valid email"
          inputType="email"
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

      <div className={styles.formControl}>
        <PasswordInput
          labelText="Confirm Password"
          errorText="Passwords provided don't match"
          hasError={false}
          id={`confirmPassword-${confirmPasswordInputId}`}
        />
      </div>

      <div className={styles.row}>
        <Checkbox id={`agreeTermAndPrivacy-${agreeTermAndPrivacyInputId}`}>
          <span>
            I agree to ExpTrack&apos;s{" "}
            <FormLink href="/terms-of-service">Terms of Service</FormLink> and{" "}
            <FormLink href="/privacy-policy">Privacy Policy</FormLink>
          </span>
        </Checkbox>
      </div>

      <div className={styles.btnContainer}>
        <FilledOutlineButton>Sign up</FilledOutlineButton>
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

export default Signup;
