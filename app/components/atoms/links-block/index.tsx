import Link from "next/link"
import styles from "./links-block.styles.module.scss"
import { CustomLink } from "../link"


const links = [
    {title: "Бизнес", href: "/"},
    {title: "О нас", href: "/about"},
    {title: "Цены", href: "/prices"},
    {title: "Оформить заказ", href: "/order"},
]


export const LinksBlock = () => {
    return <ul className={styles.links_block}>
        {links.map((link) => (
            <li key={link.href}>
                <CustomLink href={link.href}>{link.title}</CustomLink>
            </li>
        ))}
    </ul>
}
