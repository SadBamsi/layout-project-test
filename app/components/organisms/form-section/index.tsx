"use client";
import { FC, useState } from "react";
import styles from "./form-section.styles.module.scss";
import { Title, TitleType } from "../../atoms/title";
import { BaseText } from "../../atoms/base-text";
import { Icons } from "../../molecules/icons-list";
import { Form } from "../../molecules/form";
import clsx from "clsx";

export interface IFormState {
  selectValue: string;
  email: string;
  name: string;
  range: string;
  file: boolean | null;
}

export const FormSection: FC = () => {
  const [formState, setFormState] = useState<IFormState>({
    selectValue: "",
    email: "",
    name: "",
    file: null,
    range: "",
  });

  return (
    <section
      className={clsx(
        styles.form_section,
        process.env.NODE_ENV === "production" && styles["form_section--prod-bg"]
      )}
      id="order"
    >
      <div className="container">
        <div className={styles.form_section__content}>
          <div className={styles.form_section__text_content}>
            <Title
              variant={TitleType.H2}
              className={styles.form_section__title}
            >
              Оформление <span className="blue-text">Заказа</span>
            </Title>
            <BaseText className={styles.form_section__description} type="m">
              Перед заполнением формы ознакомьтесь с нашей схемой работы!
            </BaseText>
          </div>
          <Icons formState={formState} />
          <Form action={setFormState} formState={formState} />
        </div>
      </div>
    </section>
  );
};
