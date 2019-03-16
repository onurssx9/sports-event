import styled from 'styled-components';

export const Switch = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  height: 30px;
  width: 30px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.green};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-radius: 30px;
  }
`;

export const Language = styled.div`
  font-size: 12px;
`;
