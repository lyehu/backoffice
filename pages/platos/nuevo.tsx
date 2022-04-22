import type { NextPage } from "next";
import { Page } from "../../lib/ui/molecules/page/component";
import { Layouts } from "../../lib/ui/molecules/layouts";
import { DishesModule } from "../../app/modules/dishes/dishes.module";
import { NewDishForm } from "../../app/modules/dishes/presentation/newDish/new-dish.component";

const newDishPage = new Page({
  metaTitle: "Restoffice - Nuevo plato",
  title: "Añadir plato",
  children: <NewDishForm />,
  layout: Layouts.form,
});

const NewDish: NextPage = () => {
  return <DishesModule>{newDishPage.render()}</DishesModule>;
};

export default NewDish;
