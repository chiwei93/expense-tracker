import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import TextInput from "../TextInput/TextInput";

import styles from "./PasswordInput.module.css";

interface Props {
  labelText: string;
  id: string;
  hasError?: boolean;
  errorText?: string;
}

const PasswordInput = (props: Props) => {
  const { labelText, id, hasError = false, errorText = "" } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextInput
      labelText={labelText}
      id={id}
      inputType={showPassword ? 'text' : 'password'}
      hasIcon={true}
      hasError={hasError}
      errorText={errorText}
    >
      <button
        onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)}
        type="button"
        className={styles.iconBtn}
      >
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </button>
    </TextInput>
  );
};

export default PasswordInput;
