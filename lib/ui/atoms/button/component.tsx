import classNames from "classnames";
import { MouseEventHandler, ReactNode } from "react";
import { ButtonComponent } from "./button";
import styles from "./button.module.scss";
import { StyledLink } from "./link";

enum Variant {
  Contained,
  Outlined,
  Text,
}

enum Color {
  Primary,
  Secondary,
}

interface BaseButtonProps {
  color: Color;
  variant: Variant;
  className?: string;
  disabled?: boolean;
  fluid?: boolean;
  children: ReactNode;
}

interface HtmlButtonProps extends BaseButtonProps {
  target?: never;
  href?: never;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

interface ButtonLinkProps extends BaseButtonProps {
  target?: "_blank" | "_self";
  href: string;
  onClick?: never;
}

export type ButtonProps = ButtonLinkProps | HtmlButtonProps;

export const Button = (props: ButtonProps) => {
  const {
    color,
    variant,
    className,
    fluid,
    disabled,
    children,
    href,
    onClick,
  } = props;
  const classNameMap = classNames(
    styles.button,
    {
      [styles.contained]: variant === Variant.Contained,
      [styles.outlined]: variant === Variant.Outlined,
      [styles.text]: variant === Variant.Text,
      [styles.primary]: color === Color.Primary,
      [styles.secondary]: color === Color.Secondary,
      [styles.fluid]: fluid,
      [styles.disabled]: disabled,
    },
    className
  );

  return href ? (
    <StyledLink className={classNameMap} href={href}>
      {children}
    </StyledLink>
  ) : (
    <ButtonComponent
      className={classNameMap}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

Button.Variant = Variant;
Button.Color = Color;
