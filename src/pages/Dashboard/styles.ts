import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  display: flex;
  width: 100%;
  font-size: 42px;
  font-weight: 800;
  color: #18172a;
  /* background: #18172a; */
  position: absolute;
  z-index: 2;

  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;

  p span {
    color: #0049b7;
  }

  a {
    text-decoration: none;
    padding: 12px 24px;
    margin-right: 30px;
    font-size: 18px;
    color: #fff;
    background: #0049b7;
    border-radius: 10px;

    &:hover {
      background: ${shade(0.2, '#0049B7')};
    }
  }

  @media (max-width: 640px) {
    font-size: 20px;
    padding: 10px 30px;
  }
`;

export const HeaderSite = styled.div`
  display: flex;
  width: 100%;
  background: #ccd5f2;

  @media (max-width: 640px) {
    flex-direction: column;

    div {
      width: 100%;
    }
  }
`;

export const ContainerApp = styled.div`
  display: flex;
  margin-left: auto;
  width: 50%;
  justify-content: center;
  padding-top: 70px;


  img {
    height: 500px;
  }
`;

export const ContainerDownload = styled.div`
  display: flex;
  width: 50%;
  margin-left: auto;
  padding-top: 70px;
  align-items: center;
  justify-content: center;
 
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    span {
      font-size: 24px;
      font-weight: bold;
    }

    img {
      width: 200px;
    }
  }
`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  position: relative;
  padding: 30px 30px;
  z-index: 2;
  h2 {
    color: #18172a;
  }

  p {
    display: flex;
    max-width: 980px;
    font-size: 16px;
    text-align: justify;
  }
`;

export const Skills = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    margin: 0 16px;
    flex: 1;
    padding: 20px 10px 10px 10px;

    strong {
      font-size: 16px;
      text-align: center;
      margin-left: 120px;
    }

    img {
      margin-left: auto;
      margin-right: auto;
      width: 300px;
      height: 200px;
      margin: 10px;
      border-radius: 5px;
    }

    p {
      margin: 10px;
      text-align: justify;
      font-size: 14px;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    display: flex;
    flex: 1;
  }
`;

export const Footer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #18172a;
  justify-content: center;
  align-items: center;
  padding: 24px 30px;

  p {
    font-size: 16px;
    text-align: justify;
    color: #fff;

    a {
      padding-left: 5px;
      text-decoration: none;
      color: #25fbe0;
      font-weight: bold;
    }
  }
`;
