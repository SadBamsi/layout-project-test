import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./base-text.styles.module.scss";
import clsx from "clsx";

type BaseTextProps = "xl" | "m" | "s";

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
        styles.baseText,
        styles[`baseText__${type}`],
        props.className
      )}
    >
      {children}
    </span>
  );
};
