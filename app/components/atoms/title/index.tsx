import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";
import styles from "./title.styles.module.scss";
import clsx from "clsx";

export enum TitleType {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
}

export const Title: FC<
  { type: TitleType } & DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
> = (props) => {
  const component: Record<TitleType, ReactNode> = {
    [TitleType.H1]: (
      <h1
        {...props}
        className={clsx(styles.title, styles.title_main, props.className)}
      >
        {props.children}
      </h1>
    ),
    [TitleType.H2]: (
      <h2
        {...props}
        className={clsx(styles.title, styles.title_second, props.className)}
      >
        {props.children}
      </h2>
    ),
    [TitleType.H3]: <h3 {...props}>{props.children}</h3>,
    [TitleType.H4]: (
      <h4
        {...props}
        className={clsx(styles.title, styles.title_fourth, props.className)}
      >
        {props.children}
      </h4>
    ),
    [TitleType.H5]: <h5 {...props}>{props.children}</h5>,
    [TitleType.H6]: <h6 {...props}>{props.children}</h6>,
  };

  return component[props.type];
};
