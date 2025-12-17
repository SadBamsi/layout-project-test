/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/preserve-manual-memoization */
"use client";
import { useCallback, useState } from "react";
import { Input } from "../../atoms/input";
import { CustomSelect } from "../../atoms/select";
import styles from "./form.styles.module.scss";
import { RangeSlider } from "../../atoms/range-slider";
import { CustomFileUpload } from "../../atoms/file-upload";
import { Button } from "../../atoms/button";

const defaultFormState = {
  selectValue: "",
  email: "",
  name: "",
  file: null,
};

export const Form = () => {
  const [formState, setFormState] = useState(defaultFormState);

  const changeSelect = useCallback(
    (value: string) => setFormState({ ...formState, selectValue: value }),
    []
  );
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
        onChange={changeSelect}
      />

      <Input name="email" type="email" placeholder="Ваш e-mail" />
      <Input name="name" placeholder="Ваше имя" />
      <RangeSlider className={styles["form__item--big"]} />
      <CustomFileUpload />
      <Button
        variant="primary"
        className={styles.form__submit}
        onClick={() => {
          alert("Форма была отправлена");
          setFormState(defaultFormState);
        }}
      >
        Отправить
      </Button>
    </form>
  );
};
