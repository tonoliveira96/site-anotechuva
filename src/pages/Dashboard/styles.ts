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
  /* margin-left: auto; */
  width: 50%;
  justify-content: center;
  align-items: center;
  padding-top: 70px;

  img {
    height: 500px;
  }
`;

export const ContainerDownload = styled.div`
  display: flex;
  width: 50%;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fff;

  div#row {
    display: flex;
    flex-direction: row;
    height: 100%;

    div.image {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 50%;
      img {
        width: 350px;
        height: 350px;
      }
    }

    div.info {
      display: flex;
      flex-direction: column;
      text-align: justify;
      background: #f0f0f5;
      padding: 18px;
      max-width: 520px;
      flex: 1;

      h2 {
        margin-right: auto;
        margin-left: auto;
      }
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;

    div#row {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;

    div.info {
      display: flex;
      width: 100%;
      padding: 8px 30px;
      order:2;
    }

    div.image {
      display: flex;
      height: 100%;
      width: 100%;
      order: 3;
    }
    }

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
