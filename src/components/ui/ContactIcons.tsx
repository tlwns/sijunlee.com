import { Icon, Link, Flex } from '@chakra-ui/react';
import data from '../../data/contact';

const ContactIcons = () => {
  return (
    <Flex gap={4}>
    ***REMOVED***data.map((contact) => (
        <Link key={contact.label} href={contact.link} target='_blank'>
          <Icon
            color={'gray.500'}
            as={contact.icon}
            _hover={{
              color: 'blue.700',
            }}
          />
        </Link>
      ))}
    </Flex>
  );
};

export default ContactIcons;
