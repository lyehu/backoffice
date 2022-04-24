import { MessageService } from "@/core";
import {
  Button,
  FormGroup,
  FormNavigationBar,
  InputText,
  RadioGroup,
  Text,
} from "@/ui";
import { CategoryModal } from "apps/menu/modules/categories/presentation/category-modal/category-modal.component";
import { useState } from "react";
import { useService } from "react-service-locator";
import { DishProps } from "../../domain/dish.dto";
import { DishService } from "../../useCases/dish.service";
import styles from "./styles.module.scss";

export const NewDishForm = () => {
  const messageService = useService(MessageService);
  const dishService = useService(DishService);
  const [dish, setDish] = useState<DishProps>({
    allergens: "",
    category: "",
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

  const handleCategory = (value: string) => {
    setDish((dish) => ({ ...dish, category: value }));
  };

  const triggerModal = () => {
    messageService.sendMessage("open");
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
                  onInputChange("name", event)
                }
              />
            </FormGroup>
            <div className={styles.row}>
              <FormGroup className={styles.formGroup} label="Número de plato">
                <InputText
                  name="number"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onInputChange("number", event)
                  }
                />
              </FormGroup>
              <FormGroup className={styles.formGroup} label="Precio base">
                <InputText
                  name="prive"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onInputChange("prive", event)
                  }
                />
              </FormGroup>
            </div>
          </div>
          <div className={styles.section}>
            <FormGroup className={styles.formGroup} label="Categoría">
              <RadioGroup
                name="string"
                options={[
                  {
                    id: "starters",
                    label: "Entrantes",
                    value: "starters",
                  },
                  {
                    id: "main",
                    label: "Plato principal",
                    value: "main",
                  },
                ]}
                onChange={handleCategory}
                addOptionButton={{
                  label: "Nueva categoría",
                  onClick: triggerModal,
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
