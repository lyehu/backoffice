import { useState } from "react";
import { useService } from "react-service-locator";
import { Button, Text, FormGroup, FormNavigationBar } from "../../../../lib/ui";
import { DishProps } from "../domain/dish.dto";
import { DishService } from "../useCases/dish.service";
import styles from "./styles.module.scss";

export const NewDishForm = () => {
  const dishService = useService(DishService);
  const [dish, setDish] = useState<DishProps>({
    allergens: "",
    category: 0,
    imageUrl: "",
    ingredients: "",
    name: "",
    number: "",
    price: 0,
  });

  const onInputChange = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDish((dish) => ({ ...dish, [name]: event.target.value }));
  };

  const submitDish = () => {
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
            <FormGroup
              className={styles.formGroup}
              label="Nombre"
              input={{
                name: "name",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                  onInputChange("name", event),
              }}
            />
            <div className={styles.row}>
              <FormGroup
                className={styles.formGroup}
                label="Número de plato"
                input={{
                  name: "number",
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                    onInputChange("number", event),
                }}
              />
              <FormGroup
                className={styles.formGroup}
                label="Precio base"
                input={{
                  name: "price",
                  onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                    onInputChange("price", event),
                }}
              />
            </div>
          </div>
          <div className={styles.section}>
            <FormGroup
              className={styles.formGroup}
              label="Categoría"
              input={{
                name: "category",
                onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
                  onInputChange("category", event),
              }}
            />
          </div>
        </div>
      </div>
      <FormNavigationBar buttons={buttons} className={styles.footer} />
    </>
  );
};
