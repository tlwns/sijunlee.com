import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { Provider } from '@/components/ui/provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif-4',
  subsets: ['latin'],
});

const title = 'Si Jun Lee - Full-Stack Developer & Philosophy Enjoyer';
const author = 'Si Jun Lee';
const description =
  'Welcome to the personal website of Si Jun Lee, a full-stack software developer who enjoys philosophy. Explore my projects, resume, and blog to learn more about my work and interests.';

export const metadata: Metadata = {
  title: { default: title, template: `%s • ${author}` },
  description,
  metadataBase: new URL('https://sijunlee.com'),

  icons: {
    icon: [{ url: '/favicon.svg' }],
  },

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
    <html
      lang='en'
      suppressHydrationWarning={true}
      className={`${inter.variable} ${sourceSerif.variable} antialiased`}
    >
      <body>
        <Provider enableSystem={true} defaultTheme='system'>
          {children}
        </Provider>
      </body>
    </html>
  );
}
