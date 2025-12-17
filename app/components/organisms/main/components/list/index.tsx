import { BaseText } from "@/app/components/atoms/base-text";
import styles from "./list.styles.module.scss";
import { TitleType, Title } from "@/app/components/atoms/title";

const defaultData = [
  "Totam rem aperiam eaque ipsa",
  "Sit voluptatem accusantium doloremque laudantium",
  "Sed ut perspiciatis, unde omnis iste natus error",
];

export const List = () => {
  return (
    <div className={styles.list_wrapper}>
      <Title type={TitleType.H4}>
        At vero eos et accusamus et iusto odio dignissimos ducimus!
      </Title>
      <ul className={styles.list}>
        {defaultData.map((item) => (
          <li className={styles.list_item} key={item}>
            <BaseText type="xl">{item}</BaseText>
          </li>
        ))}
      </ul>
    </div>
  );
};
