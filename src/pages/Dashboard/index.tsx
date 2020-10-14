import React from 'react';

import Celular from '../../assets/celular-front.png';

import GooglePlay from '../../assets/google-play.png';

import { FiInstagram, FiFacebook } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';

import {
  Title,
  HeaderSite,
  ContainerApp,
  ContainerDownload,
  AboutMe,
  Footer,
} from './styles';

const Dashboard: React.FC = () => {
  //inicia a renderização em tela
  return (
    <>
      <Title>
        <p>
          <span>ANOTE</span>CHUVA
        </p>

        <a href="/">Entrar</a>
      </Title>

      <HeaderSite>
        <ContainerApp>
          <img src={Celular} alt="Celular" />
        </ContainerApp>

        <ContainerDownload>
          <span>Download disponível em breve</span>
          <img src={GooglePlay} alt="GooglePlay" />
        </ContainerDownload>
      </HeaderSite>

      <AboutMe>
        <h2>Sobre</h2>
        <p>
          ANOTE CHUVA é um aplicativo gratuito, foi desenvolvido com objetivo de
          facilitar a anotação de precipitação de chuvas em um determinado local,
          usando um pluviômetro o usuário diariamente realiza as medições e
          cadastrar as informações alimentando assim uma base dados.
        </p>
      </AboutMe>
      <Footer>
        <div>
          <FiInstagram size={20} color='#fff'/>
          <FiFacebook size={20} color='#fff'/>
        </div>
        <p>E-mail: contato@anotechuva.com</p>
        <p>
          Desenvolvido por{' '}
          <a href="https://www.linkedin.com/in/tonoliveira96/" target="blank">
            {' '}
            Everton Oliveira
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Dashboard;
