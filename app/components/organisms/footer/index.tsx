import clsx from "clsx";
import styles from "./footer.styles.module.scss";
import { Icon } from "../../atoms/icon";
import Link from "next/link";

const payments = ["QIWI", "Yandex", "Web Money"];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__content}>
          <p className={styles.footer__copyright}>
            © {new Date().getFullYear()}{" "}
            <span className={styles.footer__companyName}>LoremIpsum.NET</span>{" "}
            Все права защищены.
          </p>
          <div className={styles.footer__separator} />
          <ul className={clsx(styles.payments)}>
            {payments.map((payment) => (
              <li className={styles.payments__item} key={payment}>
                <Icon
                  className={styles.payments__icon}
                  icon={payment.toLowerCase()}
                />
                {payment}
              </li>
            ))}
          </ul>
          <div className={styles.footer__separator} />
          <ul className={clsx(styles.contacts)}>
            <li className={styles.payments__item}>
              <Icon className={styles.payments__icon} icon="mail" />
              <Link href="mailto:info@loremipsum.net">info@loremipsum.net</Link>
            </li>
            <li className={styles.payments__item}>
              <Icon className={styles.payments__icon} icon="vk" />
              <Link target="_blank" href="https://vk.com/loremipsum">
                Мы вконтакте
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
