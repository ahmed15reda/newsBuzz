import React, {Fragment} from 'react';
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>News</title>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
