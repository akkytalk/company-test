import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import "../styles/globals.css";

import { configureStore } from "../redux/ConfigureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
function MyApp({ Component, pageProps }) {
  const { persistor, store } = configureStore();
  return (
    <Layout>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </Layout>
  );
}

export default MyApp;
