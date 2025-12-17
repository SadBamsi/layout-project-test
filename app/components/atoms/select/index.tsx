"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./select.styles.module.scss";
import clsx from "clsx";

interface CustomSelectProps {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  maxHeight?: number;
}

export const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Выберите тип системы",
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className={styles.select}>
      <button
        className={clsx(
          styles.select__control,
          open && styles["select__control--open"]
        )}
        type="button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span
          className={clsx(
            value ? styles.select__value : styles.select__placeholder
          )}
        >
          {value || placeholder}
        </span>
        <div
          className={clsx(
            styles.select__arrow,
            open && styles["select__arrow--open"]
          )}
        ></div>
      </button>

      <div
        className={clsx(
          styles.select__dropdown,
          open && styles["select__dropdown--open"]
        )}
      >
        <div className={styles.select__options}>
          {options.map((option) => {
            const active = option === value;
            return (
              <button
                className={clsx(
                  styles.select__option,
                  active && styles["select__option--active"]
                )}
                key={option}
                onClick={() => {
                  onChange && onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
