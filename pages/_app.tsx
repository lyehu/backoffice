import "../styles/globals.css";
import "../styles/variables.css";
import "reflect-metadata";

import type { AppProps } from "next/app";
import { Infrastructure } from "../lib/infrastructure/infrastructure.module";

function App({ Component, pageProps }: AppProps) {
  return (
    <Infrastructure>
      <Component {...pageProps} />
    </Infrastructure>
  );
}

export default App;
