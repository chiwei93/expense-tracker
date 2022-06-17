import type { NextPage } from "next";

import { useRouter } from "next/router";
import { useId, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import cls from "classnames";

import Form from "../components/UI/Form/Form";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";
import Checkbox from "../components/UI/Inputs/Checkbox/Checkbox";
import FormLink from "../components/UI/Links/FormLink/FormLink";
import FilledButton from "../components/UI/Buttons/FilledButton/FilledButton";

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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onFormSubmit = () => {
    // validate user input
    dispatch(login());
    router.replace("/dashboard");
  };

  return (
    <div className={styles.formContainer}>
      <Form handleOnSubmit={onFormSubmit}>
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

        <div className={styles.formControl}>
          <TextInput
            labelText="Confirm Password"
            inputType={showConfirmPassword ? "text" : "password"}
            errorText="Passwords provided don't match"
            hasError={false}
            hasIcon={true}
            id={`confirmPassword-${confirmPasswordInputId}`}
          >
            <button
              onClick={() =>
                setShowConfirmPassword(
                  (prevShowConfirmPassword) => !prevShowConfirmPassword
                )
              }
              type="button"
              className={styles.iconBtn}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </TextInput>
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
          <FilledButton>Sign up</FilledButton>
        </div>

        <p className={styles.lastRow}>
          Already have an account?{" "}
          <span>
            <FormLink href="/">Log in</FormLink>
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Signup;
