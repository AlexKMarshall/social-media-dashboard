import type { AppProps } from "next/app";
import "src/styles/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
