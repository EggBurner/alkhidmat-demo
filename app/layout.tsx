import type { Metadata } from 'next';
import './globals.css';
import { inter, poppins, robotoMono, iBrand } from './fonts';

export const metadata: Metadata = {
  title: 'Demo App',
  description: 'A demo at AKFP - making design from figma',
};
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${poppins.variable} ${iBrand.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
