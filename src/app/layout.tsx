import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import Providers from '@/providers';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next StoreFront',
  description: 'A store built with next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.style} ${inter.style} antialiased`}>
        <Providers>
          <Navbar />
          <Container className='py-20'>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
