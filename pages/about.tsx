import Image from 'next/image';

import Carrer from '../components/Carrer';
import { styled } from '../stitches.config';
import { Heading } from '../ui';

const About = () => {
  return (
    <Content>
      <Heading size={'1'} color={'purpleToCyan'}>
        Sobre mim.
      </Heading>
      <Info>
        <Image
          width={300}
          height={300}
          style={{ borderRadius: '5px' }}
          src="https://avatars.githubusercontent.com/u/73369138?v=4"
          alt="Foto de perfil"
          quality={100}
        />
        <div>
          <p>
            Olá, meu nome é <strong>Leonne Brito</strong>. Comecei minha
            carreira como engenheiro de software em 2015 trabalhando com Ruby.
          </p>
          <p>
            Atualmente sou <strong>Software Engineer</strong> na nav9. Antes
            disso, trabalhei como Software Engineer na Reserva. Sou natural de{' '}
            <strong>Parauapebas, Pará</strong> e estou de malas prontas para ir
            morar em Florianópolis, Santa Catarina com minha esposa e filho.
          </p>
          <p>
            Sou apaixonado por tecnologia, música, e-sports e games. Gosto de
            aprender coisas novas e compartilhar conhecimento.
          </p>
        </div>
      </Info>
      <Infos>
        <div>
          <Heading size={'2'} color={'purpleToCyan'}>
            Carreira
          </Heading>
          <Carrer
            company="nav9"
            role="Software Engineer"
            location="Parauapebas, PA"
            date="Ago 2022 - Presente"
            link="https://nav9.tech"
          />
          <Carrer
            company="Reserva"
            role="Software Engineer"
            location="Parauapebas, PA"
            date="Jun 2021 - Ago 2022"
            link="https://usereserva.com/"
          />
          <Carrer
            company="Globalsys"
            role="Software Engineer"
            location="Parauapebas, PA"
            date="Jun 2021 - Ago 2022"
            link="https://www.globalsys.com.br/"
          />
          <Carrer
            company="Sem Parar"
            role="Senior Development Analyst"
            location="Parauapebas, PA"
            date="Abr 2022 - Maio 2022"
            link="https://www.semparar.com.br/"
          />
          <Carrer
            company="Triggo Labs"
            role="Senior Development Analyst"
            location="Parauapebas, PA"
            date="Abr 2022 - Maio 2022"
            link="https://www.triggolabs.com/"
          />
          <Carrer
            company="Trivod"
            role="Software Engineer"
            location="Parauapebas, PA"
            date="Jan 2022 - Fev 2022"
            link="https://www.trivod.com/"
          />
          <Carrer
            company="Tropical Puppy"
            role="Software Engineer"
            location="Parauapebas, PA"
            date="Dez 2020 - Abr 2021"
            link="https://store.steampowered.com/app/416000/Fantasy_Farming_Orange_Season/"
          />
        </div>
        <div>
          <Heading size={'2'} color={'purpleToCyan'}>
            Formação
          </Heading>
          <Carrer
            company="Rocketseat"
            role="Bootcamp Ignite"
            location="Online"
            date="Mar 2021 - Jul 2021"
            link="https://rocketseat.com.br/"
          />
          <Carrer
            company="JStack"
            role="Bootcamp JStack"
            location="Online"
            date="Fev 2022 - o momento"
            link="https://jstack.com.br/"
          />
          <Carrer
            company="UFT"
            role="Bacharelado em Ciência da Computação"
            location="Palmas, TO"
            date="Ago 2017 - Ago 2018"
            link="https://www.uft.edu.br/"
          />
        </div>
      </Infos>
    </Content>
  );
};

export default About;

const Content = styled('div', {
  marginX: 'auto',
  maxWidth: '760px',
  paddingX: '20px'
});

const Info = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',

  'div p': {
    marginTop: '1rem',
    marginY: '15px',

    strong: {
      color: '$primary'
    },

    '@bp1': {
      marginTop: '-6px'
    }
  },

  '@bp1': {
    flexDirection: 'row'
  }
});

const Infos = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '2rem',

  '@bp2': {
    flexDirection: 'column'
  }
});
