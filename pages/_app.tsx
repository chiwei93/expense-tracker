import "../styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "../store";
import { Provider } from "react-redux";
import PageContainer from "../components/Containers/PageContainer/PageContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </Provider>
  );
}

export default MyApp;
