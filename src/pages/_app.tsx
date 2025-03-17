import GlobalLayout from "@/components/global-layout";
import type { AppProps } from "next/app";
import "@/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
