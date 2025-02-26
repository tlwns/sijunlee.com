import { Icon, Link, Flex } from '@chakra-ui/react';
import data from '../../data/contact';

const ContactIcons = () => {
  return (
    <Flex gap={4}>
    ***REMOVED***data.map((contact) => (
        <Link key={contact.label} href={contact.link} target='_blank'>
          <Icon
            color={'fg.muted'}
            as={contact.icon}
            _hover={{
              color: 'blue.fg',
            }}
          />
        </Link>
      ))}
    </Flex>
  );
};

export default ContactIcons;
