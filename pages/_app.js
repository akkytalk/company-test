import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { configureStore } from "../redux/ConfigureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = configureStore();
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
