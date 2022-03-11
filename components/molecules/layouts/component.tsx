import { TextBaseProps, TextVariants } from "../../atoms/text";

class LayoutStyles {
  containerClassName: string;
  title: TextBaseProps;

  constructor({
    containerClassName,
    title,
  }: {
    containerClassName: string;
    title: {
      variant: TextVariants;
    };
  }) {
    this.containerClassName = containerClassName;
    this.title = title;
  }
}

export class Layout {
  name: string;
  styles: LayoutStyles;

  constructor({
    name,
    styles,
  }: {
    name: string;
    styles: {
      containerClassName: string;
      title: {
        variant: TextVariants;
      };
    };
  }) {
    this.name = name;
    this.styles = styles;
  }
}
