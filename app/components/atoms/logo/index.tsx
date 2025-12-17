import Link from "next/link";
import styles from "./logo.styles.module.scss"

export const Logo = () => {
    return <Link className={styles.logo} href="/">LoremIpsum.<span className="blue-text">NET</span></Link>
}
