import classNames from "classnames";
import { ReactNode } from "react";
import { InputText } from "../../../atoms/input-text/component";
import { Text } from "../../../atoms/text/component";
import styles from "./styles.module.scss";

export interface Props {
  title: string;
  steps: ReactNode;
}

export const FormLayout = (props: Props) => {
  const { title } = props;

  return (
    <div className={styles.wrapper}>
      <header className={classNames(styles.container, styles.header)}>
        <Text component="h1" variant={Text.Variant.Heading}>
          {title}
        </Text>
      </header>
      <div className={styles.containerWithSections}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <Text variant={Text.Variant.Large} bold>
              Datos básicos
            </Text>
            <InputText />
          </div>
        </div>
      </div>
    </div>
  );
};
