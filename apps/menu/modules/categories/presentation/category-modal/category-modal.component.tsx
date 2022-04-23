import {
  Button,
  InputText,
  ModalContent,
  ModalTrigger,
  ModalWrapper,
  Pill,
  Text,
} from "@/ui";
import styles from "./styles.module.scss";

export const CategoryModal = () => (
  <ModalWrapper>
    <ModalTrigger className={styles.modalTriggerButton}>
      <Pill label="Nueva categoría" neutral />
    </ModalTrigger>
    <ModalContent>
      <Text variant={Text.Variant.Large} className={styles.heading} bold>
        Nueva categoría
      </Text>
      <Text variant={Text.Variant.Medium} className={styles.description}>
        Indica la categoría a la que pertenece este plato. Por ejemplo: sushi,
        ramen.
      </Text>
      <InputText
        placeholder="Nombre de la categoría"
        className={styles.input}
      ></InputText>
      <Button
        variant={Button.Variant.Contained}
        color={Button.Color.Primary}
        onClick={() => {}}
      >
        Crear categoría
      </Button>
    </ModalContent>
  </ModalWrapper>
);
