import { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ButtonComponent = ({ children, ...others }: ButtonProps) => (
  <button {...others}>{children}</button>
);
