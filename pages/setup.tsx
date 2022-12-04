import SetupItem from '../components/Setup';
import { apps, auto, code, desk, equipaments, terminal } from '../constants';
import { styled } from '../stitches.config';
import { Heading } from '../ui';

const Setup = () => {
  return (
    <Content>
      <Heading size={'1'} color={'cyanToGreen'}>
        Meu setup, minha vida.
      </Heading>
      <p>
        Aqui você vai encontrar tudo sobre o meu setup,{' '}
        <strong>
          desde o hardware até o software que uso no meu dia a dia
        </strong>
        . Sempre que possível, vou tentar atualizar esse post com as novidades
        que vou adquirindo.
      </p>
      <SetupItem title="Equipamentos" items={equipaments} />
      <SetupItem title="Mesa" items={desk} />
      <SetupItem title="Automação" items={auto} />
      <SetupItem title="Código" items={code} />
      <SetupItem title="Terminal" items={terminal} />
      <SetupItem title="Aplicativos" items={apps} />
    </Content>
  );
};

export default Setup;

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px',

  'p strong': {
    color: '$primary'
  }
});
