import { Flex } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      w='100%'
      bg={'gray.50'}
      align={'center'}
      justify={'flex-start'}
      borderBottomColor={'gray.400'}
      borderBottomWidth={1}
      height={14}
      position={'fixed'}
    ></Flex>
  );
};

export default Navbar;
