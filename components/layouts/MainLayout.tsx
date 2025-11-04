'use client';

import { Flex } from '@chakra-ui/react';
import Navbar from '../ui/Navbar';
import { Warp } from '@paper-design/shaders-react';
import { useColorModeValue } from '../ui/color-mode';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const colorMode = useColorModeValue('light', 'dark');

  return (
    <Flex flex={1} role='main'>
      <Navbar />
      <Flex flex={1} mt={20} zIndex={1}>
        {children}
      </Flex>
      <Warp
        width={'100%'}
        height={'100%'}
        style={{
          position: 'absolute',
        }}
        colors={
          colorMode === 'light'
            ? [
                '#fafafa',
                '#fafafa',
                '#fafafa',
                '#fafafa',
                '#fafafa',
                '#fafafa',
                '#fafafa',
                '#a3cfff',
                '#fafafa',
                '#fafafa',
              ]
            : [
                '#121212',
                '#121212',
                '#121212',
                '#121212',
                '#121212',
                '#121212',
                '#121212',
                '#173da6',
                '#121212',
                '#121212',
              ]
        }
        proportion={0.5}
        softness={1}
        distortion={0}
        swirl={0.9}
        swirlIterations={2}
        shape='edge'
        shapeScale={0.2}
        speed={3}
        rotation={1.35}
      />
    </Flex>
  );
};

export default MainLayout;
