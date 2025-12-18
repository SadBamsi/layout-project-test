import { Links } from "../../molecules/links";
import { Logo } from "../../atoms/logo";
import BurgerMenu from "../../molecules/burger";
import styles from "./header.styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <Links />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
