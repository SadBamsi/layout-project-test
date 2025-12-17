import { Icon } from "../../atoms/icon";
import styles from "./icons-list.styles.module.scss";

const icons = ["searchIcon", "envelop", "percents", "file", "banknote"];

const Separator = () => (
  <div className={styles.iconsList_separators}>
    {Array.from({ length: 5 }).map((_, index) => (
      <div key={index} className={styles.dot} />
    ))}
  </div>
);

export const IconsList = () => {
  return (
    <ul className={styles.iconsList}>
      {icons.map((icon, index) => (
        <li key={icon} className={styles.iconsList_item}>
          <div className={styles.iconsList_iconWrapper}>
            <Icon className={styles.iconsList_icon} icon={icon} />
          </div>
          {index < icons.length - 1 && <Separator />}
        </li>
      ))}
    </ul>
  );
};
