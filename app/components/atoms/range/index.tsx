"use client";

import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import styles from "./range.styles.module.scss";
import clsx from "clsx";
import { BaseText } from "../base-text";
import { IFormState } from "../../organisms/form-section";

export const RangeSlider: FC<{
  className?: string;
  action: Dispatch<SetStateAction<IFormState>>;
}> = ({ className, action }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (value !== 0) {
        action((prevState) => ({
          ...prevState,
          range: value.toString(),
        }));
      } else {
        action((prevState) => ({
          ...prevState,
          range: "",
        }));
      }
    }, 250);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <div className={clsx(styles.range, className)}>
      <div className={styles.range__label}>
        <BaseText type="m">Sed ut perspiciatis, unde omnis iste natus</BaseText>
        <BaseText type="m" className={styles.range__percentage}>
          {value}%
        </BaseText>
      </div>

      <div className={styles.range__slider_container}>
        <input
          aria-label="range"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className={styles.range__slider}
          style={{
            background: `linear-gradient(to right, #4da6ff ${value}%, #2d3748 ${value}%)`,
          }}
        />
      </div>
    </div>
  );
};
