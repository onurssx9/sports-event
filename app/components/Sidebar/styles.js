import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 100vh;
  background: ${props => props.theme.main};
  color: white;

  & > div {
    display: flex;
  }
`;

export const Logo = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  height: 70px;
  width: 70px;
  padding: 10px;
`;

export const Brand = styled.div`
  width: 70px;
  font-size: 9px;
  align-items: center;
  justify-content: center;
`;
