import classNames from "classnames";
import { ReactNode, useEffect } from "react";
import { useService } from "react-service-locator";
import { DishService } from "../../../../../app/modules/dishes/useCases/dish.service";
import { InputText } from "../../../atoms/input-text/component";
import { Text } from "../../../atoms/text/component";
import styles from "./styles.module.scss";

export interface Props {
  title: string;
  children: ReactNode;
}

export const WidgetContainerLayout = (props: Props) => {
  const dishService = useService(DishService);
  const { title, children } = props;

  useEffect(() => {
    test();
  }, []);

  const test = async () => {
    const result = await dishService.getAll();
  };

  return (
    <div className={styles.wrapper}>
      <header className={classNames(styles.container, styles.header)}>
        <Text component="h1" variant={Text.Variant.Heading}>
          {title}
        </Text>
      </header>
      {children}
    </div>
  );
};
