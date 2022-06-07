export { RadixNotificationService } from "./radixNotificationService";
import * as RadixToast from "@radix-ui/react-toast";
import styles from "./styles.module.scss";

export const Toast = () => (
  <RadixToast.Provider>
    <RadixToast.Root className={styles.root} open={true}>
      <RadixToast.Title>Upgrade Available!</RadixToast.Title>
      <RadixToast.Description />
      <RadixToast.Action altText="" />
    </RadixToast.Root>
    <RadixToast.Viewport className={styles.viewport} />
  </RadixToast.Provider>
);
