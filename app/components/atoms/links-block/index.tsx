"use client";
import styles from "./links-block.styles.module.scss";
import { CustomLink } from "../link";
import { useState } from "react";

const links = [
  { title: "Бизнес", href: "/" },
  { title: "О нас", href: "#about" },
  { title: "Цены", href: "#price" },
  { title: "Оформить заказ", href: "#order" },
];

export const LinksBlock = () => {
  const [hash, setHash] = useState("");

  return (
    <ul className={styles.links_block}>
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
  );
};
