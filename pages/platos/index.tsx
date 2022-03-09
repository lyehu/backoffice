import type { NextPage } from "next";
import { Button } from "../../components/atoms/button/component";
import { EmptyState } from "../../components/molecules/empty-state/component";
import { ListLayout } from "../../components/systems/layout-list";

const dishes = {
  metaTitle: "Restoffice - Platos",
  title: "Platos",
};

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

const Dishes: NextPage = () => {
  return (
    <ListLayout {...dishes}>
      <EmptyState {...emptyDishes} />
    </ListLayout>
  );
};

export default Dishes;
