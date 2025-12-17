import { Input } from "../../atoms/input";
import { CustomSelect } from "../../atoms/select";
import styles from "./form.styles.module.scss";

export const Form = () => {
  return (
    <form action="#" className={styles.form}>
      <CustomSelect options={["dsbvbs", "dsvjks", "sdnbvkjbd"]} />
      <Input name="email" type="email" />
      <Input name="name" />
      <Input type="file" />
    </form>
  );
};
