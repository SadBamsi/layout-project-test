import { FC } from "react";
import styles from "./form-section.styles.module.scss";
import { Title, TitleType } from "../../atoms/title";
import { BaseText } from "../../atoms/base-text";
import { IconsList } from "../../molecules/icons-list";
import { Form } from "../../molecules/form";

export const FormSection: FC = () => {
  return (
    <section className={styles.formSection}>
      <div className="container">
        <div className={styles.formSection_content}>
          <div className={styles.formSection_textContent}>
            <Title type={TitleType.H2} className={styles.formSection_title}>
              Оформление <span className="blue-text">Заказа</span>
            </Title>
            <BaseText className={styles.formSection_description} type="m">
              Перед заполнением формы ознакомьтесь с нашей схемой работы!
            </BaseText>
          </div>
          <IconsList />
          <Form />
        </div>
      </div>
    </section>
  );
};
