import Head from "next/head";
import { ReactNode } from "react";
import { ContainerLayoutProps } from "../layouts/container";

export class Page {
  metaTitle: string;
  title: string;
  layout: (props: ContainerLayoutProps) => JSX.Element;
  children: ReactNode;

  constructor({
    metaTitle,
    title,
    layout,
    children,
  }: {
    metaTitle: string;
    title: string;
    layout: (props: ContainerLayoutProps) => JSX.Element;
    children: ReactNode;
  }) {
    this.metaTitle = metaTitle;
    this.title = title;
    this.layout = layout;
    this.children = children;
  }

  render() {
    const Layout = this.layout;
    const layoutProps = {
      title: this.title,
      children: this.children,
    };

    return (
      <>
        <Head>
          <title>{this.metaTitle}</title>
        </Head>
        <Layout {...layoutProps} />
      </>
    );
  }
}
