import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Prose } from '@/components/ui/prose';

interface Faq {
  question: string;
  answer: string;
}

interface FaqProps {
  data: Faq[];
}

const Faq = ({ data }: FaqProps) => {
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
        Frequently Asked Questions
      </Heading>
      {data.map((item, index) => (
        <Box key={index}>
          <Text letterSpacing={'wider'} fontWeight={'semibold'}>
            {item.question}
          </Text>
          <Prose fontWeight={'light'} fontSize={'sm'}>
            <ReactMarkdown>{item.answer}</ReactMarkdown>
          </Prose>
        </Box>
      ))}
    </Flex>
  );
};

export default Faq;
