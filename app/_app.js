// _app.js

import React from 'react';
import { SessionProvider } from '../context/sessionContext'; // Replace this with your session provider

function MyApp({ Component, pageProps }) {
    return (
        <SessionProvider>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
