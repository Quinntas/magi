import type {Metadata} from 'next';
import {Inter as FontSans} from 'next/font/google';
import './globals.css';
import {cn} from '@/lib/utils';
import {ThemeProvider} from '@/lib/providers/theme-provider';
import {Toaster} from '@/components/ui/sonner';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: {
        default: 'Magi',
        template: '%s | Magi',
    },
    description: 'Magi e-commerce',
    robots: {
        follow: true,
        index: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
