import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Envelope, User } from 'phosphor-react';

import { useDebounce } from '../hooks/useDebounce';
import { useTranslation } from '../hooks/useTranslation';
import api from '../services/api';
import { styled } from '../stitches.config';
import { Button, Heading, Input, TextArea } from '../ui';
import { validateEmail } from '../utils/validateEmail';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  const debouncedName = useDebounce(name, 500);
  const debouncedEmail = useDebounce(email, 500);
  const debouncedMessage = useDebounce(message, 500);

  const { translations } = useTranslation();

  useEffect(() => {
    if (debouncedName.length < 3 && debouncedName.length > 0) {
      setNameError(translations.contact.name_form_error);
    } else {
      setNameError('');
    }
  }, [debouncedName, translations.contact]);

  useEffect(() => {
    if (!validateEmail(debouncedEmail) && debouncedEmail.length > 0) {
      setEmailError(translations.contact.email_form_error);
    } else {
      setEmailError('');
    }
  }, [debouncedEmail, translations.contact]);

  useEffect(() => {
    if (debouncedMessage.length < 10 && debouncedMessage.length > 0) {
      setMessageError(translations.contact.message_form_error);
    } else {
      setMessageError('');
    }
  }, [debouncedMessage, translations.contact]);

  useEffect(() => {
    if (nameError || emailError || messageError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [nameError, emailError, messageError]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      await api
        .post('/emails', { name, email, message })
        .then(() => {
          toast.success(translations.contact.success_message, {
            theme: 'dark'
          });
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch(() => {
          toast.error(translations.contact.error_message, {
            theme: 'dark'
          });
        });
    } else {
      toast.error(translations.contact.form_error, {
        theme: 'dark'
      });
    }
  };

  return (
    <Content>
      <Heading size={'1'} color="pinkToPurple">
        {translations.contact.title}
      </Heading>
      <p>{translations.contact.description}</p>
      <Heading size={'2'} color="pinkToPurple">
        {translations.contact.subtitle}
      </Heading>
      <Form onSubmit={handleSubmit}>
        <InputsGroup>
          <Input
            label="Nome"
            icon={<User />}
            type="text"
            value={name}
            placeholder={translations.contact.name_placeholder}
            onChange={e => setName(e.target.value)}
            error={nameError}
          />
          <Input
            label="E-mail"
            icon={<Envelope />}
            type="email"
            value={email}
            placeholder={translations.contact.email_placeholder}
            onChange={e => setEmail(e.target.value)}
            error={emailError}
          />
          <TextArea
            value={message}
            rows={5}
            maxLength={500}
            placeholder={translations.contact.message_placeholder}
            onChange={e => setMessage(e.target.value)}
            error={messageError}
          />
          <Button
            type="submit"
            color="pink"
            disabled={!isFormValid || !name || !email || !message}
          >
            {translations.contact.submit_button}
          </Button>
        </InputsGroup>
      </Form>
    </Content>
  );
};

export default Contact;

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px',

  p: {
    margin: '0 0 20px'
  }
});

const Form = styled('form', {
  width: '100%',
  maxWidth: '480px',
  background: 'transparent',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column'
});

const InputsGroup = styled('div', {
  display: 'grid',
  gridAutoFlow: 'row',
  gap: '10px'
});
