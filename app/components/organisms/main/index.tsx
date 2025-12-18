import clsx from "clsx";
import { Title, TitleType } from "../../atoms/title";
import styles from "./main.styles.module.scss";
import { List } from "./components/list";
import { Button } from "../../atoms/button";

export const Main = () => {
  return (
    <main
      className={clsx(
        styles.main,
        process.env.NODE_ENV === "production" && styles["main--prod-bg"]
      )}
      id="main"
      tabIndex={-1}
    >
      <div className={clsx(styles.main__content, "container")}>
        <Title className={styles.main__title} variant={TitleType.H1}>
          <span className="blue-text">Lorem ipsum</span> dolor sit amet
          consectetur <span className="blue-text">adipiscing</span>
        </Title>
        <List />
        <div className={styles.main__buttons_wrapper}>
          <Button className={styles.main__button} variant="primary">
            Заказать
          </Button>
          <Button className={styles.main__button} variant="secondary">
            Подробнее
          </Button>
        </div>
      </div>
    </main>
  );
};
