'use client';

import { Field, Textarea, Input, Button, Fieldset } from '@chakra-ui/react';

import { State, submitContactForm } from '@/lib/actions/submitContactForm';
import { useActionState } from 'react';

const ContactForm = () => {
  const initialState: State = {
    errors: {},
  };

  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} style={{ width: '100%' }}>
      <Fieldset.Root gap={4}>
        <Field.Root orientation='horizontal'>
          <Field.Label hidden>Your Name</Field.Label>
          <Input
            type='text'
            borderRadius={0}
            size='lg'
            placeholder='Your Name'
            focusRingColor={'blue.fg'}
          />
        </Field.Root>
        <Field.Root orientation='horizontal'>
          <Field.Label hidden>Your Email</Field.Label>
          <Input
            type='email'
            borderRadius={0}
            size='lg'
            placeholder='Your Email'
            focusRingColor={'blue.fg'}
          />
        </Field.Root>
        <Field.Root orientation='horizontal'>
          <Field.Label hidden>Subject</Field.Label>
          <Input
            type='text'
            borderRadius={0}
            size='lg'
            placeholder='Subject'
            focusRingColor={'blue.fg'}
          />
        </Field.Root>
        <Field.Root orientation='horizontal'>
          <Field.Label hidden>Message</Field.Label>
          <Textarea
            focusRingColor={'blue.fg'}
            borderRadius={0}
            size='lg'
            placeholder='Message'
            autoresize
          />
        </Field.Root>

        <Button
          textTransform={'uppercase'}
          letterSpacing={'widest'}
          variant={'solid'}
          borderRadius={0}
          w={'100%'}
          _hover={{
            bg: 'blue.fg',
          }}
          size={'2xl'}
          type='submit'
        >
          Send
        </Button>
      </Fieldset.Root>
    </form>
  );
};

export default ContactForm;
