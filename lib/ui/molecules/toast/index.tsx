export { RadixNotificationService } from "./radixNotificationService";
import * as RadixToast from "@radix-ui/react-toast";
import styles from "./styles.module.scss";

interface ToastProps {
  description: string;
  title: string;
}

export const Toast = (props: ToastProps) => (
  <RadixToast.Provider>
    <RadixToast.Root className={styles.root} open={true}>
      <RadixToast.Title>{props.title}</RadixToast.Title>
      <RadixToast.Description>{props.description}</RadixToast.Description>
      <RadixToast.Action altText="" />
    </RadixToast.Root>
    <RadixToast.Viewport className={styles.viewport} />
  </RadixToast.Provider>
);
