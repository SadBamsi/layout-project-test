"use client";
import styles from "./links.styles.module.scss";
import { CustomLink } from "../../atoms/link";
import { useState } from "react";

const links = [
  { title: "Бизнес", href: "/" },
  { title: "О нас", href: "#about" },
  { title: "Цены", href: "#price" },
  { title: "Оформить заказ", href: "#order" },
];

export const Links = () => {
  const [hash, setHash] = useState("");

  return (
    <nav>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.href}>
            <CustomLink
              isActive={hash === link.href}
              href={link.href}
              onClick={setHash.bind(null, link.href)}
            >
              {link.title}
            </CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
