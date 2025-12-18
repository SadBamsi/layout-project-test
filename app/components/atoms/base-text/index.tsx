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
        styles.base_text,
        styles[`base_text--${type}`],
        props.className
      )}
    >
      {children}
    </span>
  );
};
