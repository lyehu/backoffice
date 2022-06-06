import { MessageService } from "@/ui";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { useService } from "react-service-locator";
import { Icon } from "../..";
import styles from "./styles.module.scss";

enum Status {
  open,
  close,
}

export const Modal = (props: any) => {
  const modalButtonRef = useRef() as RefObject<HTMLButtonElement> | undefined;
  const [state, setState] = useState<string>();
  const messageService = useService(MessageService);

  useEffect(() => {
    messageService.state$.subscribe((message: any) => {
      if (message) {
        setState(message);
      }
    });
  }, [messageService]);

  useEffect(() => {
    if (state?.length && state in Status && modalButtonRef) {
      modalButtonRef.current!.click();
      setState(undefined);
    }
  }, [state]);

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
