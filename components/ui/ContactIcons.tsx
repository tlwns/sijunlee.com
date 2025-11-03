import { Icon, Link, Flex } from '@chakra-ui/react';
import data from '@/data/contact';

const ContactIcons = () => {
  return (
    <Flex gap={4}>
      {data.map((contact) => (
        <Link
          aria-label={contact.label}
          key={contact.label}
          href={contact.link}
          target='_blank'
          rel='noopener noreferrer'
        >
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
