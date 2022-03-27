import { ReactNode } from "react";
import { Text } from "../../../atoms/text/component";
import styles from "./styles.module.scss";

export interface Props {
  title: string;
  children: ReactNode;
}

export const ContainerLayout = (props: Props) => {
  const { title, children } = props;

  return (
    <div className={styles.container}>
      <Text component="h1" variant={Text.Variant.Heading}>
        {title}
      </Text>
      {children}
    </div>
  );
};
