import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  display: flex;
  font-size: 42px;
  color: #f0f0f5;
  background: #18172a;
  position: absolute;
  width: 100%;
  z-index: 2;

  justify-content: space-between;
  padding: 10px 50px;

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
    font-size: 24px;
    padding: 10px 30px;
  }
`;

export const HeaderSite = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ContainerApp = styled.div`
  display: flex;
  width: 50%;
  height: 700px;
  justify-content: center;
  padding-top: 70px;

  img {
    height: 500px;  
  }
`;

export const ContainerDownload = styled.div`
  display: flex;
  width: 50%;
  height: 700px;
  align-items: center;
  background: #ccd5f2;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const AboutMe = styled.div`
  height: 200px;
  background: #fff;
  position: relative;
  z-index: 2;
  h2 {
    color: #3a3a3a;
  }

  p {
    display: flex;
    padding: 10px 24px;
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

export const Contact = styled.div`
  background: #3a3a3a;
  height: 300px;

  h2 {
    color: #fff;
  }

  div {
    justify-content: center;
    align-items: center;
    text-align: center;

    a {
      text-decoration: none;
    }

    p {
      font-size: 18px;
      color: #f0f0f5;
      margin-top: 4px;
      padding: 5px;
    }
  }
  svg {
    margin-left: auto;
    color: #fff;
    transition: color 0.2s;
  }
  &hover {
    color: ${shade(0.8, '#fff')};
  }
`;
