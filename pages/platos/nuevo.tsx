import type { NextPage } from "next";
import { Page } from "../../components/molecules/page/component";
import { Layouts } from "../../components/molecules/layouts";

const newDishPage = new Page({
  metaTitle: "Restoffice - Nuevo plato",
  title: "Añadir plato",
  children: <div>asd</div>,
  layout: Layouts.form,
});

const Dishes: NextPage = () => {
  return newDishPage.render();
};

export default Dishes;
