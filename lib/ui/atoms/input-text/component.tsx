import classNames from "classnames";
import { InputHTMLAttributes } from "react";
import styles from "./text.module.scss";

export enum Sizes {
  Medium,
}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  size?: Sizes;
  className?: string;
}

export const InputText = ({
  size = Sizes.Medium,
  className,
}: InputTextProps) => {
  const classNameMap = classNames(
    styles.input,
    {
      [styles.md]: size === Sizes.Medium,
    },
    className
  );

  return <input className={classNameMap} type="text" />;
};

InputText.Sizes = Sizes;
