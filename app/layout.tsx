import { ReactNode } from 'react';
import '@shared/styles/globals.scss';

function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}

export default RootLayout;