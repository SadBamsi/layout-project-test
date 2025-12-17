import clsx from "clsx";
import { Title, TitleType } from "../../atoms/title";
import styles from "./main.styles.module.scss";
import { List } from "./components/list";
import { Button } from "../../atoms/button";

export const Main = () => {
  return (
    <main className={styles.main}>
      <div className={clsx(styles.main_content, "container")}>
        <Title className={styles.main_title} type={TitleType.H1}>
          <span className="blue-text">Lorem ipsum</span> dolor sit amet
          consectetur <span className="blue-text">adipiscing</span>
        </Title>
        <List />
        <div className={styles.main_buttons_wrapper}>
          <Button className={styles.main_button} variant="primary">
            Заказать
          </Button>
          <Button className={styles.main_button} variant="secondary">
            Подробнее
          </Button>
        </div>
      </div>
    </main>
  );
};
