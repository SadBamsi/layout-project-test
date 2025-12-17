import { LinksBlock } from "../../atoms/links-block";
import { Logo } from "../../atoms/logo";
import BurgerMenu from "../../molecules/burger";
import styles from "./header.styles.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_content}>
          <Logo />
          <LinksBlock />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
