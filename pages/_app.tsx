import type { AppProps } from 'next/app'
import {MantineProvider} from'@mantine/core'
import Head from 'next/head'

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Python Coding Tutor</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },

            '.profile-image': {
              float: 'left',
              margin: '4px',
            },
          }),
          colorScheme: "dark",
        }}
      >
        <Component {...pageProps}/>
      </MantineProvider>
    </>
  )
}
