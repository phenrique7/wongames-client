import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App(props: AppProps) {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default App;
