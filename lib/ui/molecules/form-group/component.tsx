import classNames from "classnames";
import { InputText, InputTextProps } from "../../atoms/input-text/component";
import { Text } from "../../atoms/text/component";
import styles from "./styles.module.scss";

type FormGroupProps = {
  className?: string;
  label: string;
  input: InputTextProps;
};

export const FormGroup = ({ className, label, input }: FormGroupProps) => (
  <div className={classNames(styles.formGroup, className)}>
    <Text
      variant={Text.Variant.Small}
      component="label"
      className={styles.label}
    >
      {label}
    </Text>
    <InputText {...input} />
  </div>
);
