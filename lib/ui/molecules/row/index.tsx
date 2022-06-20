import { Text } from "../..";
import styles from "./styles.module.scss";

export const Row = () => (
  <div className={styles.card}>
    <div className={styles.image}></div>
    <Text variant={Text.Variant.Medium}>Arroz</Text>
  </div>
);
