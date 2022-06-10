import type { NextPage } from "next";
import { useState, useId } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import FullSizeContainer from "../components/Containers/FullSizeContainer/FullSizeContainer";
import Form from "../components/UI/Form/Form";
import TextInput from "../components/UI/Inputs/TextInput/TextInput";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const emailInputId = useId();
  const passwordInputId = useId();
  const rememberMeId = useId();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FullSizeContainer>
      <Form>
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
            inputType="password"
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
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </TextInput>
        </div>

        <div className={styles.row}>checkbox row</div>
      </Form>
    </FullSizeContainer>
  );
};

export default Home;
