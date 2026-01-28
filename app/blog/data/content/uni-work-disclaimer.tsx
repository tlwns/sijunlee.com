import { Blockquote } from '@chakra-ui/react';

const UniWorkDisclaimer = () => {
  return (
    <Blockquote.Root>
      <Blockquote.Content fontStyle={'italic'} fontSize={'sm'} opacity={0.9}>
        Written for a university assignment when I was a Philosophy
        undergraduate.
      </Blockquote.Content>
    </Blockquote.Root>
  );
};

export default UniWorkDisclaimer;
