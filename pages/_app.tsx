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
              oxSizing: 'border-box',
              fontSize: '16px'
            },

            '.profile-image': {
              float: 'left',
              marginRight: '4px'
            },
            '.h3': {
              color: 'red'
            }
          }),
          colorScheme: "dark",
        }}
      >
      <Component {...pageProps}/>
      </MantineProvider>
    </>
  )
}
