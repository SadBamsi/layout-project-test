import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./base-text.styles.module.scss";
import clsx from "clsx";

type BaseTextProps = "xl" | "m" | "s" | "xs";

export const BaseText: FC<
  { type: BaseTextProps } & DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >
> = ({ type, children, ...props }) => {
  return (
    <span
      {...props}
      className={clsx(
        styles["base-text"],
        styles[`base-text--${type}`],
        props.className
      )}
    >
      {children}
    </span>
  );
};
