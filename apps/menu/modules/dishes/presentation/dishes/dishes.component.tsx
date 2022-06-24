import { Button, EmptyState } from "@/ui";
import { MenuModule } from "apps/menu/menu.module";
import { useEffect, useState } from "react";
import { useService } from "react-service-locator";
import { DishService } from "../../useCases/dish.service";

const emptyDishes = {
  image: {
    name: "icons/dish.svg",
    height: 144,
    width: 143,
    alt: "Icono de un plato con palillos",
  },
  title: "No existen platos",
  text: "Aquí se mostrará tu lista de platos. Añade nuevos platos para empezar a operar. ",
  button: {
    children: "Añadir un plato",
    href: "/platos/nuevo",
    color: Button.Color.Primary,
    variant: Button.Variant.Contained,
  },
};

export const DishesList = () => {
  const [dishes, setDishes] = useState([]);
  const dishesService = useService(DishService);

  useEffect(() => {
    initDishes();
  });

  const initDishes = () => {};

  return (
    <MenuModule>{!dishes.length && <EmptyState {...emptyDishes} />}</MenuModule>
  );
};
