import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";
import styles from "./styles.module.scss";

export const ModalContent = (props: any) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className={styles.overlay}>
      <DialogPrimitive.Content className={styles.content} {...props}>
        {props.children}
        <DialogPrimitive.Close>x</DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Overlay>
  </DialogPrimitive.Portal>
);
ModalContent.displayName = "";
export const ModalWrapper = DialogPrimitive.Root;
export const ModalTrigger = DialogPrimitive.Trigger;
