import {
  Box,
  Text,
  Heading,
  Separator,
  VStack,
  HStack,
} from '@chakra-ui/react';

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps) => {
  return (
    <Box
      bg='gray.50'
      p={8}
      rounded='md'
      borderWidth={1}
      borderColor='gray.200'
      maxW='600px'
      mx='auto'
    >
      <Heading as='h2' size='lg' mb={4} color='blue.600'>
        📬 New Contact Form Submission
      </Heading>

      <VStack align='start' gap={3} mb={4}>
        <HStack>
          <Text fontWeight='bold'>Name:</Text>
          <Text>{name}</Text>
        </HStack>

        <HStack>
          <Text fontWeight='bold'>Email:</Text>
          <Text>{email}</Text>
        </HStack>

        <HStack>
          <Text fontWeight='bold'>Subject:</Text>
          <Text>{subject}</Text>
        </HStack>
      </VStack>

      <Separator my={4} />

      <Box>
        <Text fontWeight='bold' mb={2}>
          Message:
        </Text>
        <Box
          bg='white'
          p={4}
          rounded='md'
          borderWidth={1}
          borderColor='gray.200'
          fontSize='sm'
        >
          <Text whiteSpace='pre-wrap'>{message}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailTemplate;
