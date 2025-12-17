"use client";
import Link, { LinkProps } from "next/link";
import styles from "./link.styles.module.scss";
import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";



export const CustomLink: FC<LinkProps & PropsWithChildren> = (props) => {
    const currentPath = usePathname();
    return <Link {...props} className={styles.link + (currentPath === props.href ? " " + styles.link__active : "")}></Link>
}
