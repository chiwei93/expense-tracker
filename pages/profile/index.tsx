import type { NextPage } from "next";

import { useId } from "react";
import cls from "classnames";

import FlexFullVerticalContainer from "../../components/Containers/FlexFullVerticalContainer/FlexFullVerticalContainer";
import BreadCrumbsList from "../../components/Layouts/BreadCrumbsList/BreadCrumbsList";
import Form from "../../components/UI/Form/Form";

import styles from "../../styles/Profile.module.css";
import TextInput from "../../components/UI/Inputs/TextInput/TextInput";
import FormLink from "../../components/UI/Links/FormLink/FormLink";
import FilledOutlineButton from "../../components/UI/Buttons/FilledOutlineButton/FilledOutlineButton";

const Profile: NextPage = () => {
  const firstNameInputId = useId();
  const lastNameInputId = useId();
  const emailInputId = useId();

  const breadcrumbs = [
    { name: "dashboard", href: "/dashboard" },
    { name: "your profile", href: "/profile" },
  ];

  const onFormSubmit = () => {};

  return (
    <FlexFullVerticalContainer>
      <Form handleOnSubmit={onFormSubmit}>
        <BreadCrumbsList breadcrumbs={breadcrumbs} />

        <h1 className={styles.heading}>Your Profile</h1>

        <div className={cls(styles.formControl, styles.divider)}>
          <TextInput
            labelText="First Name"
            id={`firstName-${firstNameInputId}`}
          />

          <TextInput labelText="Last Name" id={`lastName-${lastNameInputId}`} />
        </div>

        <div className={cls(styles.formControl, styles.lastRow)}>
          <TextInput
            labelText="Email"
            inputType="email"
            id={`email-${emailInputId}`}
          />
        </div>

        <div>
          <FormLink href="/profile/change-password">Change password</FormLink>
        </div>

        <div className={styles.btnContainer}>
          <FilledOutlineButton>Edit</FilledOutlineButton>

          <FilledOutlineButton btnDesignType="outline" btnType="button">
            Cancel
          </FilledOutlineButton>
        </div>
      </Form>
    </FlexFullVerticalContainer>
  );
};

export default Profile;
