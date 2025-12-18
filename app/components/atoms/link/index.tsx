"use client";
import Link, { LinkProps } from "next/link";
import styles from "./link.styles.module.scss";
import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

export const CustomLink: FC<
  LinkProps & PropsWithChildren & { isActive?: boolean }
> = ({ isActive, ...props }) => {
  return (
    <Link
      {...props}
      className={clsx(styles.link, isActive && styles["link--active"])}
    >
      {props.children}
    </Link>
  );
};
