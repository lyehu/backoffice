import { Button, FormGroup, FormNavigationBar, InputText, Text } from "@/ui";
import { useService } from "react-service-locator";
import { DishService } from "../../useCases/dish.service";
import { NewDishService } from "../../useCases/newDish.service";
import { Categories } from "../categories/categories.component";
import { CategoryModal } from "./category-modal/category-modal.component";
import styles from "./styles.module.scss";

export const NewDishForm = () => {
  const dishService = useService(DishService);
  const newDishService = useService(NewDishService);

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
                  newDishService.updateName(event.target.value)
                }
              />
            </FormGroup>
            <div className={styles.row}>
              <FormGroup className={styles.formGroup} label="Número de plato">
                <InputText
                  name="number"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    newDishService.updateNumber(event.target.value)
                  }
                />
              </FormGroup>
              <FormGroup className={styles.formGroup} label="Precio base">
                <InputText
                  name="price"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    newDishService.updatePrice(event.target.value)
                  }
                />
              </FormGroup>
            </div>
          </div>
          <div className={styles.section}>
            <FormGroup className={styles.formGroup} label="Categoría">
              <Categories />
            </FormGroup>
          </div>
        </div>
      </div>
      <FormNavigationBar buttons={buttons} className={styles.footer} />
      <CategoryModal />
    </>
  );
};
