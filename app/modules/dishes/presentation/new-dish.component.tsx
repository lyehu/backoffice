import { InputText } from "../../../../lib/ui/atoms/input-text/component";
import { Text } from "../../../../lib/ui/atoms/text/component";
import { FormGroup } from "../../../../lib/ui/molecules/form-group/component";
import styles from "./styles.module.scss";

export const NewDishForm = () => (
  <div className={styles.containerWithSections}>
    <div className={styles.grid}>
      <div className={styles.section}>
        <Text className={styles.sectionTitle} variant={Text.Variant.Large} bold>
          Datos básicos
        </Text>
        <FormGroup
          className={styles.formGroup}
          label="Nombre"
          input={{ name: "name" }}
        />
        <div className={styles.row}>
          <FormGroup
            className={styles.formGroup}
            label="Número de plato"
            input={{ name: "number" }}
          />
          <FormGroup
            className={styles.formGroup}
            label="Precio base"
            input={{ name: "price" }}
          />
        </div>
      </div>
    </div>
  </div>
);
