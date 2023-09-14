import React from "react";
import { AppProps } from "next/app";
import Rootlayout from "@/components/Rootlayout";
import "@/styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { persistor, store } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <Provider store={store}>
     <PersistGate persistor={persistor} loading={null}>
    <SessionProvider session={session}>
    <div className="bg-gray-200">
        <Rootlayout>
          <Component {...pageProps} />
        </Rootlayout>
      </div>

    </SessionProvider>
     </PersistGate>
    </Provider>
  );
}

export default MyApp;
