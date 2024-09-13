import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from 'next/dynamic';

// Dynamically import GlobalInit component with ssr: false
const GlobalInit = dynamic(() => import('../../GlobalInit'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Component {...pageProps} /> */}
      <GlobalInit />
    </>
  );
}
