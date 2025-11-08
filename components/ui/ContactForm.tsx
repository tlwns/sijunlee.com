'use client';

import { Field, Textarea, Input, Button, Fieldset } from '@chakra-ui/react';

import { State, submitContactForm } from '@/lib/actions/submitContactForm';
import { useActionState } from 'react';

const ContactForm = () => {
  const initialState: State = {};

  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} style={{ width: '80%' }}>
      <Fieldset.Root gap={4}>
        <Field.Root invalid={state.errors?.name !== undefined}>
          <Field.Label hidden>Your Name</Field.Label>
          <Input
            type='text'
            borderRadius={0}
            size='lg'
            placeholder='Your Name'
            focusRingColor={'blue.fg'}
            name='name'
            defaultValue={state.inputs?.name}
          />
          {state.errors?.name && (
            <Field.ErrorText>{state.errors?.name.join(', ')}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={state.errors?.email !== undefined}>
          <Field.Label hidden>Your Email</Field.Label>
          <Input
            type='email'
            borderRadius={0}
            size='lg'
            placeholder='Your Email'
            focusRingColor={'blue.fg'}
            name='email'
            defaultValue={state.inputs?.email}
          />
          {state.errors?.email && (
            <Field.ErrorText>{state.errors?.email.join(', ')}</Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={state.errors?.subject !== undefined}>
          <Field.Label hidden>Subject</Field.Label>
          <Input
            type='text'
            borderRadius={0}
            size='lg'
            placeholder='Subject'
            focusRingColor={'blue.fg'}
            name='subject'
            defaultValue={state.inputs?.subject}
          />
          {state.errors?.subject && (
            <Field.ErrorText>
              {state.errors?.subject.join(', ')}
            </Field.ErrorText>
          )}
        </Field.Root>
        <Field.Root invalid={state.errors?.message !== undefined}>
          <Field.Label hidden>Message</Field.Label>
          <Textarea
            focusRingColor={'blue.fg'}
            borderRadius={0}
            size='lg'
            placeholder='Message'
            autoresize
            name='message'
            defaultValue={state.inputs?.message}
          />
          {state.errors?.message && (
            <Field.ErrorText>
              {state.errors?.message.join(', ')}
            </Field.ErrorText>
          )}
        </Field.Root>

        <Button
          textTransform={'uppercase'}
          letterSpacing={'widest'}
          variant={'solid'}
          borderRadius={0}
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
