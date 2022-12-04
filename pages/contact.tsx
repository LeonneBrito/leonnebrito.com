import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Envelope, User } from 'phosphor-react';

import { useDebounce } from '../hooks/useDebounce';
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

  useEffect(() => {
    if (debouncedName.length < 3 && debouncedName.length > 0) {
      setNameError('Nome deve ter no mínimo 3 caracteres');
    } else {
      setNameError('');
    }
  }, [debouncedName]);

  useEffect(() => {
    if (!validateEmail(debouncedEmail) && debouncedEmail.length > 0) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  }, [debouncedEmail]);

  useEffect(() => {
    if (debouncedMessage.length < 10 && debouncedMessage.length > 0) {
      setMessageError('Mensagem deve ter no mínimo 10 caracteres');
    } else {
      setMessageError('');
    }
  }, [debouncedMessage]);

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
          toast.success('Mensagem enviada com sucesso!');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch(() => {
          toast.error('Erro ao enviar mensagem', {
            theme: 'dark'
          });
        });
    } else {
      toast.error('Formulário inválido', {
        theme: 'dark'
      });
    }
  };

  return (
    <Content>
      <Heading size={'1'} color="pinkToPurple">
        Bora trocar umas figurinhas?
      </Heading>
      <p>
        Se você tem alguma dúvida, sugestão ou quer apenas conversar, entre em
        contato comigo. Eu adoro trocar figurinhas e conhecer novas pessoas.
      </p>
      <Heading size={'2'} color="pinkToPurple">
        Me envie um e-mail
      </Heading>
      <Form onSubmit={handleSubmit}>
        <InputsGroup>
          <Input
            label="Nome"
            icon={<User />}
            type="text"
            value={name}
            placeholder="Digite seu nome"
            onChange={e => setName(e.target.value)}
            error={nameError}
          />
          <Input
            label="E-mail"
            icon={<Envelope />}
            type="email"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={e => setEmail(e.target.value)}
            error={emailError}
          />
          <TextArea
            value={message}
            rows={5}
            maxLength={500}
            placeholder="Digite sua mensagem"
            onChange={e => setMessage(e.target.value)}
            error={messageError}
          />
          <Button
            type="submit"
            color="pink"
            disabled={!isFormValid || !name || !email || !message}
          >
            Enviar
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
