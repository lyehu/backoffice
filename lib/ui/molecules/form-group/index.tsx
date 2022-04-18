import classNames from "classnames";
import { Text } from "../../atoms/text/component";
import styles from "./styles.module.scss";

interface FormGroupProps {
  className?: string;
  label: string;
  children: JSX.Element;
}

export const FormGroup = ({ className, label, children }: FormGroupProps) => {
  return (
    <div className={classNames(styles.formGroup, className)}>
      <Text
        variant={Text.Variant.Small}
        component="label"
        className={styles.label}
      >
        {label}
      </Text>
      {children}
    </div>
  );
};
