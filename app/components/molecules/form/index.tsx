"use client";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { Input } from "../../atoms/input";
import { CustomSelect } from "../../atoms/select";
import styles from "./form.styles.module.scss";
import { RangeSlider } from "../../atoms/range";
import { CustomFileUpload } from "../../atoms/file-upload";
import { Button } from "../../atoms/button";
import { IFormState } from "../../organisms/form-section";

const defaultFormState = {
  selectValue: "",
  email: "",
  name: "",
  file: null,
  range: "",
};

export const Form: FC<{
  action: Dispatch<SetStateAction<IFormState>>;
  formState: IFormState;
}> = ({ action, formState }) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      action="#"
      className={styles.form}
    >
      <CustomSelect
        options={[
          "dsbvbs",
          "dsvjks",
          "sdnbvkjbd",
          "vkhjdfbhjbh",
          "jvfbhjkfdbhjv",
          "dsbvjhdfjvbd",
          "jvfdbhjdh",
          "jvbkhfdh",
          "jfbvhjd",
        ]}
        value={formState.selectValue}
        onChange={action}
      />

      <Input
        name="email"
        aria-label="email"
        type="email"
        placeholder="Ваш e-mail"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          action((prev) => ({
            ...prev,
            email: e.target.value,
          }))
        }
      />
      <Input
        name="name"
        placeholder="Ваше имя"
        aria-label="name"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          action((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <RangeSlider className={styles["form__item--big"]} action={action} />
      <CustomFileUpload action={action} />
      <Button
        variant="primary"
        className={styles.form__submit}
        onClick={() => {
          alert("Форма была отправлена");
          action(defaultFormState);
        }}
      >
        Отправить
      </Button>
    </form>
  );
};
