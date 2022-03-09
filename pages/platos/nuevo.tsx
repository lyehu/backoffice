import type { NextPage } from "next";
import { Button } from "../../components/atoms/button/component";
import { EmptyState } from "../../components/molecules/empty-state/component";
import { ListLayout } from "../../components/systems/layout-list";

const newDish = {
  metaTitle: "Restoffice - Nuevo plato",
  title: "Añadir plato",
};

const Dishes: NextPage = () => {
  return (
    <ListLayout {...newDish}>
      <div>asd</div>
    </ListLayout>
  );
};

export default Dishes;
