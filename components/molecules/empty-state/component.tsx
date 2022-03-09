import Image from "next/image";
import { Button, ButtonProps } from "../../atoms/button/component";
import { StyledLink } from "../../atoms/button/link";
import { Text } from "../../atoms/text/component";
import styles from "./empty-state.module.scss";

type Image = {
  name: string;
  height: number;
  width: number;
  alt: string;
};

type EmptyStateProps = {
  image: Image;
  title: string;
  text: string;
  button: ButtonProps;
};

export const EmptyState = ({
  image: { name, alt, ...imageProps },
  title,
  text,
  button,
}: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={`/images/${name}`} alt={alt} {...imageProps} />
      </div>
      <Text
        className={styles.title}
        component="h2"
        variant={Text.Variant.Large}
        bold
      >
        {title}
      </Text>
      <Text className={styles.text} variant={Text.Variant.Medium}>
        {text}
      </Text>
      <Button {...button} />
    </div>
  );
};
