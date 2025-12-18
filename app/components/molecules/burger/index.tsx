"use client";
import { useState, FC, useEffect, useRef } from "react";
import styles from "./burger.styles.module.scss";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { href: "/", label: "Бизнес" },
  { href: "#about", label: "О нас" },
  { href: "#price", label: "Цены" },
  { href: "#order", label: "Оформить заказ" },
];

const BurgerMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [hash, setHash] = useState("");

  const ref = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", onClickOutside);
    }

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const clickHandler = (val: string) => {
    setHash(val);
    setIsOpen(false);
  };

  return (
    <>
      <button
        className={`${styles.burger} ${isOpen ? styles["burger--open"] : ""}`}
        onClick={toggleMenu}
        aria-label="Открыть меню"
        ref={buttonRef}
      >
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </button>

      <nav
        ref={ref}
        className={`${styles.menu} ${isOpen ? styles["menu--open"] : ""}`}
      >
        <ul className={styles.menu__list}>
          {links.map((link) => (
            <li className={styles.menu__item} key={link.label}>
              <Link
                href={link.href}
                className={clsx(
                  styles.menu__link,
                  hash === link.href && styles["menu__link--active"]
                )}
                scroll
                onClick={clickHandler.bind(null, link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default BurgerMenu;
