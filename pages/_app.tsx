import type { AppProps } from 'next/app'
import {MantineProvider} from'@mantine/core'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Langford Coding Tutor</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme:'dark',
      }}>
        <Component {...pageProps}/>
      </MantineProvider>
    </>
  )
}
