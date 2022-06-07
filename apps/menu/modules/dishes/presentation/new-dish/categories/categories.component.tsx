import { MessageService, Option, RadioGroup } from "@/ui";
import { Ref, useEffect, useRef, useState } from "react";
import { useService } from "react-service-locator";
import { CategoryService } from "../../../useCases/category.service";
import { NewDishService } from "../../../useCases/newDish.service";

export const Categories = () => {
  const messageService = useService(MessageService);
  const categoryService = useService(CategoryService);
  const newDishService = useService(NewDishService);
  const [categoryOptions, setCategoryOptions] = useState<Option[]>([]);
  const radioGroupRef: Ref<any> = useRef();

  useEffect(() => {
    categoryService.loadCategories();
    addCategoriesListener();
    addCategorySelectionListener();
  }, []);

  const addCategoriesListener = () => {
    categoryService.entities$.subscribe((categories) => {
      const options = categories.map((category) => category.toOption());
      setCategoryOptions(options);
    });
  };

  const addCategorySelectionListener = () => {
    newDishService.state$.subscribe(({ dish }) => {
      if (dish.category) {
        radioGroupRef.current &&
          radioGroupRef.current.updateValue(dish.category);
      }
    });
  };

  const handleCategoryChange = (value: string) => {
    newDishService.updateCategory(value);
  };

  const toggleModal = () => {
    messageService.openModal();
  };

  return (
    <RadioGroup
      ref={radioGroupRef}
      name="string"
      options={categoryOptions}
      onChange={handleCategoryChange}
      addOptionButton={{
        label: "Nueva categoría",
        onClick: toggleModal,
      }}
    />
  );
};
