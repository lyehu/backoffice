import classNames from "classnames";
import { ReactNode } from "react";
import { Text } from "../../../atoms/text/component";
import { Toast } from "../../toast";
import styles from "./styles.module.scss";

export interface Props {
  title: string;
  children: ReactNode;
}

export const WidgetContainerLayout = (props: Props) => {
  const { title, children } = props;

  return (
    <div className={styles.wrapper}>
      <header className={classNames(styles.container, styles.header)}>
        <Text component="h1" variant={Text.Variant.Heading}>
          {title}
        </Text>
      </header>
      <Toast />
      {children}
    </div>
  );
};
