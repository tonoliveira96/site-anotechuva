import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  color: #000;
  max-width: 700px;
  text-align: justify;
  margin: 20px;

  p {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  li {
    margin-left: 2rem;
  }
`;
