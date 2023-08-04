import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/core';
import { AppContextProvider } from 'context/AppContext';

import stylesBreakpoints from 'theme/styles/breakpoints';
import styleCookieSent from 'theme/styles/cookieconsent';
import stylesGlobal from 'theme/styles/global';

import CookiesPanel from '../src/components/layout/CookiesPanel';
import AppWrapper from '../src/components/wrapper/AppWrapper';

import 'theme/styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <AppContextProvider>
            <>
                <Global
                    styles={[
                        stylesGlobal,
                        stylesBreakpoints,
                        styleCookieSent,
                    ]}
                />
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link
                        rel="shortcut icon"
                        href="/images/favicons/favicon.ico"
                    />
                    <link
                        rel="manifest"
                        href="/images/favicons/manifest.json"
                    />
                    <meta
                        name="theme-color"
                        content="#ffffff"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                    />
                </Head>
                <AppWrapper>
                    <Component {...pageProps} />
                    <CookiesPanel />
                </AppWrapper>
            </>
        </AppContextProvider>
    );
};

export default App;
