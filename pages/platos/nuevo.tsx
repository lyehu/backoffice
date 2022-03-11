import type { NextPage } from "next";
import { Page } from "../../components/molecules/page/component";
import { FullWidthLayout } from "../../components/molecules/layouts/full-width/component";

const newDishPage = new Page({
  metaTitle: "Restoffice - Nuevo plato",
  title: "Añadir plato",
  children: <div>asd</div>,
  template: FullWidthLayout,
});

const Dishes: NextPage = () => {
  return newDishPage.render();
};

export default Dishes;
