import clsx from "clsx";
import { Icon } from "../../atoms/icon";
import styles from "./icons.styles.module.scss";
import { FC } from "react";
import { IFormState } from "../../organisms/form-section";

const icons = [
  { formKey: "selectValue", icon: "searchIcon" },
  { formKey: "email", icon: "envelop" },
  { formKey: "range", icon: "percents" },
  { formKey: "file", icon: "file" },
  { formKey: "name", icon: "banknote" },
];

const Separator = () => (
  <div className={styles.icons__separators}>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className={styles.dot} />
    ))}
  </div>
);

export const Icons: FC<{ formState: IFormState }> = ({ formState }) => {
  return (
    <ul className={styles.icons}>
      {icons.map((icon, index) => (
        <li key={icon.formKey} className={styles["icons__item-content"]}>
          <div
            className={clsx(
              styles["icons__icon-wrapper"],
              icon.formKey && formState[icon.formKey as keyof IFormState]
                ? styles["icons__icon-wrapper--active"]
                : ""
            )}
          >
            <Icon className={styles.icons__icon} icon={icon.icon} />
          </div>
          {index < icons.length - 1 && <Separator />}
        </li>
      ))}
    </ul>
  );
};
