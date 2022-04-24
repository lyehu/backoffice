import "reflect-metadata";
import "../styles/globals.css";
import "../styles/variables.css";

import { Infrastructure } from "@/infrastructure";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Infrastructure>
      <Component {...pageProps} />
    </Infrastructure>
  );
}

export default App;
