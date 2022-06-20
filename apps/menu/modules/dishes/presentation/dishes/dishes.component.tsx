import { Button, EmptyState } from "@/ui";
import { MenuModule } from "apps/menu/menu.module";

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

export const DishesList = () => (
  <MenuModule>
    <EmptyState {...emptyDishes} />
  </MenuModule>
);
