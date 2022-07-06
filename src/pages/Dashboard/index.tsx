import React from 'react';

import Celular from '../../assets/celular-front.png';
import Banner01 from '../../assets/banner01.png';
import Banner02 from '../../assets/banner02.png';

import GooglePlay from '../../assets/google-play.png';

import { FiInstagram, FiFacebook } from 'react-icons/fi';

import {
  Title,
  HeaderSite,
  ContainerApp,
  ContainerDownload,
  AboutMe,
  Content,
  Footer,
} from './styles';
import { animated, useSpring } from 'react-spring';

const Dashboard: React.FC = () => {
  //inicia a renderização em tela
  const transitionsLeftToRight = useSpring({
    opacity: 1,
    delay: 500,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(-400px)',
    },
  });
  const transitionsRightToLeft = useSpring({
    opacity: 1,
    delay: 700,
    transform: 'translateX(0)',
    from: {
      opacity: 0,
      transform: 'translateX(400px)',
    },
  });
  return (
    <>
      <Title>
        <p>
          <span>ANOTE</span>CHUVA
        </p>

        <a href="https://app.anotechuva.com">Acessar</a>
      </Title>

      <HeaderSite>
        <ContainerApp>
          <animated.div style={transitionsLeftToRight}>
            <img src={Celular} alt="Celular" />
          </animated.div>
        </ContainerApp>

        <ContainerDownload>
          <animated.div style={transitionsRightToLeft}>
            <span>Download disponível em breve</span>
            <img src={GooglePlay} alt="GooglePlay" />
          </animated.div>
        </ContainerDownload>
      </HeaderSite>

      <AboutMe>
        <h2>Sobre</h2>
        <p>
          ANOTE CHUVA é uma aplicação gratuita, desenvolvida com objetivo de
          facilitar o registro de precipitação de chuvas em um determinado
          local. Usando um pluviômetro o usuário diariamente realiza as medições
          e cadastrar as informações alimentando assim uma base de dados
          unificada.
        </p>
      </AboutMe>
      <hr />
      <Content>
        <div id="row">
          <div className="image">
            <img src={Banner01} alt="banner01" />
          </div>

          <div className="info">
            <h2>Conectividade</h2>
            <p>
              Acesse seu dados de chuvas já cadastrados ou cadastre uma nova
              precipitação de chuvas de qualquer lugar e a qualquer momento, no
              celular, tablet ou computador. Basta ter acesso a internet.
            </p>
          </div>
        </div>

        <div id="row">
          <div className="info">
            <h2>Relatórios</h2>
            <p>
              Tenha acesso a gráficos com indicadores das chuvas que você
              cadastrou.
            </p>
          </div>
          <div className="image">
            <img src={Banner02} alt="banner02" />
          </div>
        </div>
      </Content>
      <Footer>
        <div>
          <FiInstagram size={24} color="#fff" />
          <FiFacebook size={24} color="#fff" />
        </div>
        <p>E-mail: contato@anotechuva.com</p>
        <p>
          Está sendo Desenvolvido por{' '}
          <a href="https://www.linkedin.com/in/tonoliveira96/" target="blank">
            {' '}
            Everton Oliveira
          </a>
        </p>
        <a href="/privacy" className="privacy">Políticas de Privacidade</a>
      </Footer>
    </>
  );
};

export default Dashboard;
