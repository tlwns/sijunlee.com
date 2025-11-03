import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Provider } from '@/components/ui/provider';
import Navbar from '@/components/ui/Navbar';
import { Flex } from '@chakra-ui/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const title = 'Si Jun Lee - Full-Stack Developer & Philosophy Enjoyer';
const description =
  'Welcome to the personal website of Si Jun Lee, a full-stack software developer who enjoys philosophy. Explore my projects, resume, and blog to learn more about my work and interests.';

export const metadata: Metadata = {
  title: { default: title, template: `%s • ${title}` },
  description,
  metadataBase: new URL('https://sijunlee.com'),

  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: '/',
    title,
    description,
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },

  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <body className={`${inter.variable} antialiased`}>
        <Provider>
          <Flex
            dir='column'
            minHeight='100svh'
            bgColor='bg.muted'
            justify='center'
          >
            <Navbar />
            <Flex flex={1} mt={14} maxW='90rem'>
              {children}
            </Flex>
          </Flex>
        </Provider>
      </body>
    </html>
  );
}
