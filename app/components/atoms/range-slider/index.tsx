"use client";

import { ChangeEvent, FC, useState } from "react";
import styles from "./range-slider.styles.module.scss";
import clsx from "clsx";

export const RangeSlider: FC<{ className?: string }> = ({ className }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className={clsx(styles.rangeSlider, className)}>
      <div className={styles.rangeSlider__label}>
        <span>Sed ut perspiciatis, unde omnis iste natus</span>
        <span className={styles.rangeSlider__percentage}>{value}%</span>
      </div>

      <div className={styles.rangeSlider__sliderContainer}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className={styles.rangeSlider__slider}
          style={{
            background: `linear-gradient(to right, #4da6ff ${value}%, #2d3748 ${value}%)`,
          }}
        />
      </div>
    </div>
  );
};
