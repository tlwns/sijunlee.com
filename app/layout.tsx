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

const title = 'Si Jun Lee';
const description = 'Full-Stack Developer & Philosophy Enjoyer';

export const metadata: Metadata = {
  title: { default: title, template: `%s | ${title}` },
  description,
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
