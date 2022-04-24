import { MessageService } from "@/core";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useService } from "react-service-locator";
import { Icon } from "../..";
import styles from "./styles.module.scss";

export const Modal = (props: any) => {
  const modalButtonRef = useRef() as RefObject<HTMLButtonElement> | undefined;
  const [messages, setMessages] = useState<string[]>([]);
  const messageService = useService(MessageService);

  useEffect(() => {
    const subscription = messageService.onMessage().subscribe((message) => {
      if (message && message === "open") {
        setMessages((messages) => [...messages, message]);
      }
    });

    return subscription.unsubscribe;
  }, [messageService]);

  useEffect(() => {
    if (messages.length && modalButtonRef) {
      modalButtonRef.current!.click();
      setMessages([]);
    }
  }, [messages]);

  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger ref={modalButtonRef} />
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.overlay}>
          <DialogPrimitive.Content className={styles.content} {...props}>
            {props.children}
            <DialogPrimitive.Close className={styles.buttonClose}>
              <Icon src={Icon.Src.cross} alt="Cross" />
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
