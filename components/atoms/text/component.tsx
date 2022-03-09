import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./text.module.scss";

enum Styles {
  ExtraSmall,
  Small,
  Medium,
  Large,
  Heading,
}

type TextProps = {
  children: ReactNode;
  variant: Styles;
  component?: keyof JSX.IntrinsicElements;
  className?: string;
  bold?: boolean;
};

export const Text = ({
  variant,
  component = "p",
  className,
  bold,
  children,
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

  return <HtmlTag className={classNameMap}>{children}</HtmlTag>;
};

Text.Variant = Styles;