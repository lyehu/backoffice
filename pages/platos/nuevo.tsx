import type { NextPage } from "next";
import { MenuModule } from "../../apps/menu/menu.module";
import { NewDishForm } from "../../apps/menu/modules/dishes/presentation/new-dish/new-dish.component";
import { Layouts } from "../../lib/ui/molecules/layouts";
import { Page } from "../../lib/ui/molecules/page/component";

const newDishPage = new Page({
  metaTitle: "Restoffice - Nuevo plato",
  title: "Añadir plato",
  children: <NewDishForm />,
  layout: Layouts.form,
});

const NewDish: NextPage = () => {
  return <MenuModule>{newDishPage.render()}</MenuModule>;
};

export default NewDish;
