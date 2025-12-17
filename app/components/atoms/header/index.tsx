import { LinksBlock } from "../links-block";
import { Logo } from "../logo";
import styles from "./header.styles.module.scss";

export const Header = () => {
    return <header className={styles.header}>
        <div className="container">
            <div className={styles.header_content}>
                <Logo />
                <LinksBlock />
            </div>
        </div>
    </header>
}
