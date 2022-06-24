export { RadixNotificationService } from "./radix-notifications.service";
import * as RadixToast from "@radix-ui/react-toast";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useService } from "react-service-locator";
import { Icon } from "../..";
import {
  NotificationProps,
  RadixNotificationService,
  Types,
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
  const [style, setStyle] = useState<Types>("default");
  const notificationsService = useService(RadixNotificationService);

  useEffect(() => {
    notificationsService.state$.subscribe((message: NotificationProps) => {
      if (message) {
        setOpen(true);
        setStyle(message.type);
        setContent({
          title: message.title,
          description: message.description,
        });
      }
    });
  }, [notificationsService]);

  return (
    <RadixToast.Provider>
      <RadixToast.Root className={classNames(styles.root)} open={open}>
        <div className={styles.body}>
          <div className={styles.icon}>
            {style === "success" && <Icon src={Icon.Src.smile} alt="" />}
          </div>
          <div className={styles.main}>
            <RadixToast.Title className={styles.title}>
              {content.title}
            </RadixToast.Title>
            <RadixToast.Description>
              {content.description}
            </RadixToast.Description>
          </div>
        </div>
      </RadixToast.Root>
      <RadixToast.Viewport className={styles.viewport} />
    </RadixToast.Provider>
  );
};
