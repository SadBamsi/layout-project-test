import { FC, InputHTMLAttributes } from "react";
import styles from "./input.styles.module.scss";

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <input className={styles.input} {...props} />;
};
