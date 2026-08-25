import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Zenium Website Implementation',
  description: 'Energy intelligence, built for scale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} [scroll-behavior:smooth]`}>
      <body className="m-0 bg-zen-bg text-white min-w-[320px] [&_a]:text-inherit [&_a]:no-underline [&_a]:[font:inherit] [&_button]:cursor-pointer [&_button]:[font:inherit]">
        {children}
      </body>
    </html>
  );
}
