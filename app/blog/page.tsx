import { Flex } from '@chakra-ui/react';
import MainLayout from '@/components/layouts/MainLayout';
import MainHeader from '@/components/ui/MainHeader';

const title = 'Blog';
const description =
  'Essays and articles on Philosophy, Theology, and Programming.';
const url = '/blog';

export const metadata = {
  title,
  description,

  alternates: {
    canonical: url,
  },

  openGraph: {
    title,
    description,
    url,
    type: 'website',
    // images: [
    //   {
    //     url: '/og-image.png',
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
};

const sections = {
  Education: () => <Education data={education} />,
  Experience: () => <Experience data={experience} />,
  Awards: () => <Awards data={awards} />,
  Skills: () => <Skills data={skills} />,
};

const BlogPage = () => {
  return (
    <MainLayout>
      <Flex
        flexDir='column'
        gap={10}
        w={'100%'}
        minH={'calc(100svh - 5rem)'}
        py={{ base: 16, md: 24 }}
        px={{ base: 12, md: 18, '2xl': 40 }}
      >
        <MainHeader title={'Resume'} />
        <Flex
          flexDir='column'
          gap={14}
          w={'100%'}
          px={{ base: 12, md: 48, lg: 180, xl: 240, '2xl': 480 }}
        >
          {Object.entries(sections).map(([key, Section]) => (
            <Section key={key} />
          ))}
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default BlogPage;
