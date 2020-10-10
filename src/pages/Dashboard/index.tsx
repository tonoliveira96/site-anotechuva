import React from 'react';

import Celular from '../../assets/celular-front.png';

// import { FiArrowRight, FiInstagram } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';

import {
  Title,
  HeaderSite,
  ContainerApp,
  ContainerDownload,
  AboutMe,
} from './styles';

const Dashboard: React.FC = () => {
  //inicia a renderização em tela
  return (
    <>
      <Title>
        ANOTE CHUVA
        <a href="/">Entrar</a>
      </Title>

      <HeaderSite>
        <ContainerApp>
          <img src={Celular} alt="Celular" />
        </ContainerApp>

        <ContainerDownload
          
        ></ContainerDownload>
      </HeaderSite>

      <AboutMe></AboutMe>
    </>
  );
};

export default Dashboard;
