import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
