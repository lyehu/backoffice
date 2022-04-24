import { Button, InputText, Modal, Text } from "@/ui";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useService } from "react-service-locator";
import { CategoryService } from "../../useCases/category.service";
import styles from "./styles.module.scss";

export const CategoryModal = () => {
  const categoryService = useService(CategoryService);
  const [name, setName] = useState<string>();

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (value) {
      setName(value);
    }
  };

  const onSubmit: MouseEventHandler<HTMLButtonElement> = () => {
    if (name) {
      categoryService.add({ name, nameEnglish: "" });
    }
  };

  return (
    <Modal>
      <Text variant={Text.Variant.Large} className={styles.heading} bold>
        Nueva categoría
      </Text>
      <Text variant={Text.Variant.Medium} className={styles.description}>
        Indica la categoría a la que pertenece este plato. Por ejemplo: sushi,
        ramen.
      </Text>
      <InputText
        placeholder="Nombre de la categoría"
        className={styles.input}
        onChange={onChange}
      ></InputText>
      <Button
        variant={Button.Variant.Contained}
        color={Button.Color.Primary}
        onClick={onSubmit}
      >
        Crear categoría
      </Button>
    </Modal>
  );
};
