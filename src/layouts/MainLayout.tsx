import { Flex } from '@chakra-ui/react';
import Sidebar from '../components/ui/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const MainLayout = ({
  children,
  title = 'Si Jun Lee',
  description = "Si Jun Lee's personal website.",
}: MainLayoutProps) => {
  return (
    <Flex
      flex={1}
      px={16}
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      gap={20}
    >
      <title>{title === 'Si Jun Lee' ? title : `${title} - Si Jun Lee`}</title>
      <meta name='description' content={description} />
      <meta name='author' content='Si Jun Lee' />
      <meta name='keywords' content='Si Jun, Sijun, Si Jun Lee, Sijun Lee' />
      <Sidebar />
      <Flex
        aria-label='main'
        bg={'bg.subtle'}
        flex={1}
        my={14}
        height={'fit-content'}
        borderWidth={1.1}
        borderColor={'border'}
        py={12}
        px={10}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default MainLayout;
