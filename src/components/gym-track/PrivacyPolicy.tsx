import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Prose } from '../../components/ui/prose';

interface PrivacyPolicy {
  title: string;
  content: string;
}

interface PrivacyPolicyProps {
  data: PrivacyPolicy[];
}

const PrivacyPolicy = ({ data }: PrivacyPolicyProps) => {
  return (
    <Flex flexDir='column' gap={8}>
      <Heading
        textAlign={'center'}
        as={'h3'}
        textTransform={'uppercase'}
        letterSpacing={'wider'}
        mb={4}
        fontSize={'lg'}
      >
        Privacy Policy
      </Heading>
      {data.map((item, index) => (
        <Box key={index}>
          <Text letterSpacing={'wider'} fontWeight={'semibold'}>
            {item.title}
          </Text>
          <Text fontWeight={'light'} fontSize={'sm'}>
            <Prose>
              <ReactMarkdown>{item.content}</ReactMarkdown>
            </Prose>
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default PrivacyPolicy;
