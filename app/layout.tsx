import { ReactNode } from 'react';
import '@shared/styles/globals.scss';
import DirectionProvider from "@shared/utilits/DirectionProvider";

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <DirectionProvider>{children}</DirectionProvider>
        </body>
        </html>
    );
}

export default RootLayout;