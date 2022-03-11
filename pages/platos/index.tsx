import type { NextPage } from "next";
import { Button } from "../../components/atoms/button/component";
import { EmptyState } from "../../components/molecules/empty-state/component";
import { Page } from "../../components/molecules/page/component";
import { FullWidthLayout } from "../../components/molecules/layouts/full-width/component";

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
  template: FullWidthLayout,
});

const Dishes: NextPage = () => {
  return DishesPage.render();
};

export default Dishes;
