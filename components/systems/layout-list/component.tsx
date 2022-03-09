import Head from "next/head";
import { ReactNode } from "react";
import { Text } from "../../atoms/text/component";
import styles from "./layout-list.module.scss";

type ListPageProps = {
  metaTitle: string;
  title: string;
  children: ReactNode;
};

export const ListLayout = ({ metaTitle, title, children }: ListPageProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <Text component="h1" variant={Text.Variant.Heading}>
        {title}
      </Text>
      {children}
    </div>
  );
};
