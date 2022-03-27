import type { NextPage } from "next";
import { Button } from "../../lib/ui/atoms/button/component";
import { EmptyState } from "../../lib/ui/molecules/empty-state/component";
import { Page } from "../../lib/ui/molecules/page/component";
import { Layouts } from "../../lib/ui/molecules/layouts";

const emptyDishes = {
  image: {
    name: "dish.svg",
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

const DishesPage = new Page({
  title: "Platos",
  metaTitle: "Restoffice - Platos",
  children: <EmptyState {...emptyDishes} />,
  layout: Layouts.container,
});

const Dishes: NextPage = () => {
  return DishesPage.render();
};

export default Dishes;
