import classNames from "classnames";
import { Button, ButtonProps } from "../../atoms/button";
import styles from "./styles.module.scss";

type FormNavigationProps = {
  buttons: {
    primary: ButtonProps;
    secondary: ButtonProps;
  };
  className: string;
};

export const FormNavigationBar = (props: FormNavigationProps) => {
  const {
    className,
    buttons: { primary: primaryCTA, secondary: secondaryCTA },
  } = props;
  return (
    <div className={classNames(styles.bar, styles.container, className)}>
      <Button {...secondaryCTA} />
      <Button {...primaryCTA} />
    </div>
  );
};
