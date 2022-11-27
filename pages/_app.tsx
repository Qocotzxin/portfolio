import { HygraphModel } from "@models/hygraph";
import "@styles/globals.scss";
import Layout from "@ui/Layout";
import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/variables.css";

export default function App({
  Component,
  pageProps,
}: AppProps<HygraphModel>): JSX.Element {
  return (
    <>
      <Script id="theme-selection">
        {`(function () {
          function getInitialColorMode() {
            if (typeof window === 'undefined') {
              return 'light';
            }

            const persistedColorPreference = window?.localStorage?.getItem(
              "color-mode"
            );
            const hasPersistedPreference = typeof persistedColorPreference === "string";
            if (hasPersistedPreference) {
              return persistedColorPreference;
            }
            const mql = window?.matchMedia("(prefers-color-scheme: dark)");
            const hasMediaQueryPreference = typeof mql.matches === "boolean";
            if (hasMediaQueryPreference) {
              return mql.matches ? "dark" : "light";
            }
            return "light";
          }
          const colorMode = getInitialColorMode();
          const root = document.documentElement;
          root.style.setProperty(
            "--ce-body-bg",
            colorMode === "light"
              ? "var(--ce-color-body-light-bg)"
              : "var(--ce-color-body-dark-bg)"
          );
          root.style.setProperty(
            "--ce-body-text",
            colorMode === "light"
              ? "var(--ce-color-body-dark-bg)"
              : "var(--ce-color-body-light-bg)"
          );
          root.style.setProperty("--initial-color-mode", colorMode);
        })()`}
      </Script>
      <Layout hygraphData={pageProps.hygraphData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
