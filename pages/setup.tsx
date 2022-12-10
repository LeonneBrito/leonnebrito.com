import SetupItem from '../components/Setup';
import {
  apps,
  auto,
  code,
  desk,
  deskUS,
  equipaments,
  terminal
} from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import { styled } from '../stitches.config';
import { Heading } from '../ui';

const Setup = () => {
  const { translations, location } = useTranslation();
  return (
    <Content>
      <Heading size={'1'} color={'cyanToGreen'}>
        {translations.setup.title}
      </Heading>
      <p
        dangerouslySetInnerHTML={{
          __html: translations.setup.description
        }}
      />
      <SetupItem title={translations.setup.equipaments} items={equipaments} />
      <SetupItem
        title={translations.setup.desk}
        items={location === 'pt' ? desk : deskUS}
      />
      <SetupItem title={translations.setup.automation} items={auto} />
      <SetupItem title={translations.setup.code} items={code} />
      <SetupItem title={translations.setup.terminal} items={terminal} />
      <SetupItem title={translations.setup.apps} items={apps} />
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
