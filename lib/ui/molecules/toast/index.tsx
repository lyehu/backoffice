export { RadixNotificationService } from "./radix-notifications.service";
import * as RadixToast from "@radix-ui/react-toast";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useService } from "react-service-locator";
import {
  NotificationProps,
  RadixNotificationService,
} from "./radix-notifications.service";
import styles from "./styles.module.scss";

interface ToastData {
  title: string;
  description: string;
}

export const Toast = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ToastData>({
    title: "",
    description: "",
  });
  const [style, setStyle] = useState(styles["default"]);
  const notificationService = useService(RadixNotificationService);

  useEffect(() => {
    notificationService.state$.subscribe((message: NotificationProps) => {
      if (message) {
        setOpen(true);
        setStyle(styles[message.type]);
        setContent({
          title: message.title,
          description: message.description,
        });
      }
    });
  }, [notificationService]);

  return (
    <RadixToast.Provider>
      <RadixToast.Root
        type="foreground"
        className={classNames(styles.root, style)}
        open={open}
      >
        <RadixToast.Title>{content.title}</RadixToast.Title>
        <RadixToast.Description>{content.description}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
};
