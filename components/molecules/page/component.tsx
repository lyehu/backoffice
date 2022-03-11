import Head from "next/head";
import { ReactNode } from "react";
import { Text } from "../../atoms/text/component";
import { Layout } from "../layouts";
import styles from "../layouts/full-width/styles.module.scss";

export class Page {
  metaTitle: string;
  title: string;
  template: Layout;
  children: ReactNode;

  constructor({
    metaTitle,
    title,
    template,
    children,
  }: {
    metaTitle: string;
    title: string;
    template: Layout;
    children: ReactNode;
  }) {
    this.metaTitle = metaTitle;
    this.title = title;
    this.template = template;
    this.children = children;
  }

  render() {
    return (
      <div className={styles[this.template.styles.containerClassName]}>
        <Head>
          <title>{this.metaTitle}</title>
        </Head>
        <Text component="h1" variant={this.template.styles.title.variant}>
          {this.title}
        </Text>
        {this.children}
      </div>
    );
  }
}
