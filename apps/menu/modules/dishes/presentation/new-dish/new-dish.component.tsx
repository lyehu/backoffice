import {
  Button,
  FormGroup,
  FormNavigationBar,
  InputText,
  MessageService,
  Option,
  RadioGroup,
  Text,
} from "@/ui";
import { CategoryService } from "apps/menu/modules/dishes/useCases/category.service";
import { useEffect, useState } from "react";
import { useService } from "react-service-locator";
import { DishService } from "../../useCases/dish.service";
import { NewDishService } from "../../useCases/newDish.service";
import { CategoryModal } from "./category-modal/category-modal.component";
import styles from "./styles.module.scss";

export const NewDishForm = () => {
  const messageService = useService(MessageService);
  const dishService = useService(DishService);
  const categoryService = useService(CategoryService);
  const newDishService = useService(NewDishService);
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);

  useEffect(() => {
    categoryService.loadCategories();
    categoryService.entities$.subscribe((categories) => {
      const options = categories.map((category) => category.toOption());
      setCategoryOptions(options);
    });
  }, []);

  const submitDish = () => {
    const { dish } = newDishService.state$.getValue();
    dishService.add(dish);
  };

  const buttons = {
    primary: {
      variant: Button.Variant.Contained,
      color: Button.Color.Primary,
      children: "Crear plato",
      onClick: submitDish,
    },
    secondary: {
      variant: Button.Variant.Outlined,
      color: Button.Color.Primary,
      children: "Cancelar",
      onClick: () => {},
    },
  };

  const handleCategoryChange = (value: string) => {
    newDishService.addCategory(value);
  };

  const toggleModal = () => {
    messageService.openModal();
  };

  return (
    <>
      <div className={styles.containerWithSections}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <Text
              className={styles.sectionTitle}
              variant={Text.Variant.Large}
              bold
            >
              Datos básicos
            </Text>
            <FormGroup className={styles.formGroup} label="Nombre">
              <InputText
                name="name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  newDishService.addName(event.target.value)
                }
              />
            </FormGroup>
            <div className={styles.row}>
              <FormGroup className={styles.formGroup} label="Número de plato">
                <InputText
                  name="number"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    newDishService.addNumber(event.target.value)
                  }
                />
              </FormGroup>
              <FormGroup className={styles.formGroup} label="Precio base">
                <InputText
                  name="prive"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    newDishService.addPrice(event.target.value)
                  }
                />
              </FormGroup>
            </div>
          </div>
          <div className={styles.section}>
            <FormGroup className={styles.formGroup} label="Categoría">
              <RadioGroup
                name="string"
                options={categoryOptions}
                onChange={handleCategoryChange}
                addOptionButton={{
                  label: "Nueva categoría",
                  onClick: toggleModal,
                }}
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <FormNavigationBar buttons={buttons} className={styles.footer} />
      <CategoryModal />
    </>
  );
};
