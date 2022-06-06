import { Button, InputText, MessageService, Modal, Text } from "@/ui";
import { ChangeEventHandler, MouseEventHandler, useState } from "react";
import { useService } from "react-service-locator";
import { CategoryService } from "../../../useCases/category.service";
import { NewDishService } from "../../../useCases/newDish.service";
import styles from "./styles.module.scss";

export const CategoryModal = () => {
  const messageService = useService(MessageService);
  const categoryService = useService(CategoryService);
  const newDishService = useService(NewDishService);
  const [name, setName] = useState<string>();

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (value) {
      setName(value);
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    if (name) {
      const newCategoryId = await categoryService.add(name);

      if (newCategoryId.length) {
        newDishService.updateCategory(newCategoryId);
        messageService.closeModal();
      }
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
        type="submit"
        variant={Button.Variant.Contained}
        color={Button.Color.Primary}
        onClick={handleSubmit}
      >
        Crear categoría
      </Button>
    </Modal>
  );
};
