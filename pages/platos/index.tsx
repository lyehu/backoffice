import { DishesList } from "apps/menu/modules/dishes/presentation/dishes/dishes.component";
import type { NextPage } from "next";
import { Layouts } from "../../lib/ui/molecules/layouts";
import { Page } from "../../lib/ui/molecules/page/component";

const DishesPage = new Page({
  title: "Platos",
  metaTitle: "Restoffice - Platos",
  children: <DishesList />,
  layout: Layouts.container,
});

const Dishes: NextPage = () => {
  return DishesPage.render();
};

export default Dishes;
