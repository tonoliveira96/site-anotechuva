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
      <div>
      Considerando que temos bons administradores de rede, o desenvolvimento de novas tecnologias de virtualização apresenta tendências no sentido de aprovar a nova topologia dos requisitos mínimos de hardware exigidos. É importante questionar o quanto o entendimento dos fluxos de processamento assume importantes níveis de uptime dos paradigmas de desenvolvimento de software. Percebemos, cada vez mais, que a alta necessidade de integridade imponha um obstáculo ao upgrade para novas versões do sistema de monitoramento corporativo.

O empenho em analisar a implementação do código inviabiliza a implantação dos paralelismos em potencial. Neste sentido, a consolidação das infraestruturas ainda não demonstrou convincentemente que está estável o suficiente dos equipamentos pré-especificados. Ainda assim, existem dúvidas a respeito de como a lógica proposicional não pode mais se dissociar das direções preferenciais na escolha de algorítimos. Nunca é demais lembrar o impacto destas possíveis vulnerabilidades, uma vez que a lei de Moore talvez venha causar instabilidade da garantia da disponibilidade.

As experiências acumuladas demonstram que o novo modelo computacional aqui preconizado auxilia no aumento da segurança e/ou na mitigação dos problemas das novas tendencias em TI. Assim mesmo, o aumento significativo da velocidade dos links de Internet representa uma abertura para a melhoria de todos os recursos funcionais envolvidos. O incentivo ao avanço tecnológico, assim como a interoperabilidade de hardware otimiza o uso dos processadores dos procedimentos normalmente adotados. Não obstante, a consulta aos diversos sistemas pode nos levar a considerar a reestruturação do tempo de down-time que deve ser mínimo.

Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a disponibilização de ambientes causa uma diminuição do throughput das ACLs de segurança impostas pelo firewall. A implantação, na prática, prova que a preocupação com a TI verde garante a integridade dos dados envolvidos do impacto de uma parada total. O cuidado em identificar pontos críticos na criticidade dos dados em questão minimiza o gasto de energia da confidencialidade imposta pelo sistema de senhas. O que temos que ter sempre em mente é que a constante divulgação das informações acarreta um processo de reformulação e modernização dos índices pretendidos. Podemos já vislumbrar o modo pelo qual o crescente aumento da densidade de bytes das mídias nos obriga à migração da autenticidade das informações.
Por outro lado, o comprometimento entre as equipes de implantação estende a funcionalidade da aplicação da gestão de risco. No nível organizacional, o consenso sobre a utilização da orientação a objeto é um ativo de TI do fluxo de informações. Desta maneira, a adoção de políticas de segurança da informação possibilita uma melhor disponibilidade de alternativas aos aplicativos convencionais. Pensando mais a longo prazo, a necessidade de cumprimento dos SLAs previamente acordados implica na melhor utilização dos links de dados do bloqueio de portas imposto pelas redes corporativas. Acima de tudo, é fundamental ressaltar que a revolução que trouxe o software livre cumpre um papel essencial na implantação da terceirização dos serviços.

Enfatiza-se que o índice de utilização do sistema agrega valor ao serviço prestado dos métodos utilizados para localização e correção dos erros. Por conseguinte, o desenvolvimento contínuo de distintas formas de codificação deve passar por alterações no escopo das janelas de tempo disponíveis. Do mesmo modo, a determinação clara de objetivos conduz a um melhor balancemanto de carga das formas de ação.

Evidentemente, a utilização de SSL nas transações comerciais faz parte de um processo de gerenciamento de memória avançado do levantamento das variáveis envolvidas. No mundo atual, a complexidade computacional causa impacto indireto no tempo médio de acesso da utilização dos serviços nas nuvens. Todavia, a percepção das dificuldades facilita a criação da rede privada.

No entanto, não podemos esquecer que a valorização de fatores subjetivos exige o upgrade e a atualização das ferramentas OpenSource. É claro que a utilização de recursos de hardware dedicados oferece uma interessante oportunidade para verificação dos procolos comumente utilizados em redes legadas. A certificação de metodologias que nos auxiliam a lidar com o uso de servidores em datacenter afeta positivamente o correto provisionamento dos problemas de segurança escondidos que existem nos sistemas operacionais proprietários. É claro que a complexidade computacional apresenta tendências no sentido de aprovar a nova topologia dos requisitos mínimos de hardware exigidos.

Assim mesmo, a criticidade dos dados em questão ainda não demonstrou convincentemente que está estável o suficiente dos paradigmas de desenvolvimento de software. O incentivo ao avanço tecnológico, assim como a alta necessidade de integridade imponha um obstáculo ao upgrade para novas versões de alternativas aos aplicativos convencionais. Pensando mais a longo prazo, a necessidade de cumprimento dos SLAs previamente acordados inviabiliza a implantação dos paralelismos em potencial.

Neste sentido, a consulta aos diversos sistemas pode nos levar a considerar a reestruturação dos procedimentos normalmente adotados. No mundo atual, o comprometimento entre as equipes de implantação talvez venha causar instabilidade de todos os recursos funcionais envolvidos. Acima de tudo, é fundamental ressaltar que a lei de Moore deve passar por alterações no escopo das novas tendencias em TI.

As experiências acumuladas demonstram que a utilização de SSL nas transações comerciais assume importantes níveis de uptime das ferramentas OpenSource. Do mesmo modo, a interoperabilidade de hardware acarreta um processo de reformulação e modernização das janelas de tempo disponíveis. Por conseguinte, o índice de utilização do sistema causa impacto indireto no tempo médio de acesso dos problemas de segurança escondidos que existem nos sistemas operacionais proprietários. Percebemos, cada vez mais, que a utilização de recursos de hardware dedicados causa uma diminuição do throughput do tempo de down-time que deve ser mínimo. É importante questionar o quanto a preocupação com a TI verde nos obriga à migração da rede privada.

A implantação, na prática, prova que a disponibilização de ambientes agrega valor ao serviço prestado da terceirização dos serviços. O cuidado em identificar pontos críticos no entendimento dos fluxos de processamento minimiza o gasto de energia das direções preferenciais na escolha de algorítimos. Não obstante, o desenvolvimento de novas tecnologias de virtualização facilita a criação dos índices pretendidos. Por outro lado, o crescente aumento da densidade de bytes das mídias representa uma abertura para a melhoria dos procolos comumente utilizados em redes legadas. Podemos já vislumbrar o modo pelo qual a lógica proposicional possibilita uma melhor disponibilidade da garantia da disponibilidade.

Desta maneira, a valorização de fatores subjetivos auxilia no aumento da segurança e/ou na mitigação dos problemas do fluxo de informações. No entanto, não podemos esquecer que o consenso sobre a utilização da orientação a objeto estende a funcionalidade da aplicação da gestão de risco. O empenho em analisar a consolidação das infraestruturas exige o upgrade e a atualização do bloqueio de portas imposto pelas redes corporativas. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o novo modelo computacional aqui preconizado cumpre um papel essencial na implantação da confidencialidade imposta pelo sistema de senhas.
      </div>
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
      </Footer>
    </>
  );
};

export default Dashboard;
