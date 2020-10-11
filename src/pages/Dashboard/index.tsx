import React from 'react';

import Celular from '../../assets/celular-front.png';

import GooglePlay from '../../assets/google-play.png';

// import { FiArrowRight, FiInstagram } from 'react-icons/fi';
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

        <ul>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
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
        <hr />
        <h2>Sobre</h2>
        <p>
          Lorem Ipsum é simplesmente um texto fictício da indústria de impressão
          e composição. Lorem Ipsum tem sido o texto fictício padrão da
          indústria desde os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de amostra de tipos.
        </p>
      </AboutMe>
      <Footer>
        <p>
        Desenvolvido  por <a href="https://www.linkedin.com/in/tonoliveira96/" target="_blank"> Everton Oliveira</a>
        </p>
       
      </Footer>
    </>
  );
};

export default Dashboard;
