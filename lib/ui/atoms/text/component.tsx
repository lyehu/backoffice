import classNames from "classnames";
import { ElementType, ReactNode } from "react";
import styles from "./text.module.scss";

export enum Styles {
  ExtraSmall,
  Small,
  Medium,
  Large,
  Heading,
}

export type TextBaseProps = {
  variant: Styles;
  component?: ElementType;
  className?: string;
  bold?: boolean;
};

type TextProps = {
  children: ReactNode;
} & TextBaseProps;

export const Text = ({
  variant,
  component = "p",
  className,
  bold,
  children,
  ...other
}: TextProps) => {
  const classNameMap = classNames(
    styles.text,
    {
      [styles.xs]: variant === Styles.ExtraSmall,
      [styles.s]: variant === Styles.Small,
      [styles.md]: variant === Styles.Medium,
      [styles.lg]: variant === Styles.Large,
      [styles.heading]: variant === Styles.Heading,
      [styles.bold]: bold,
    },
    className
  );

  const HtmlTag = component;

  return (
    <HtmlTag className={classNameMap} {...other}>
      {children}
    </HtmlTag>
  );
};

Text.Variant = Styles;
