"use client";
import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import styles from "./button.styles.module.scss";

type ButtonType = "primary" | "secondary";

export const Button: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & { variant: ButtonType; action?: () => void }
> = ({ variant, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(styles.button, props.className, {
        [styles.button__primary]: variant === "primary",
        [styles.button__secondary]: variant === "secondary",
      })}
      onClick={props.onClick ? props.onClick : props.action}
    >
      {props.children}
    </button>
  );
};
