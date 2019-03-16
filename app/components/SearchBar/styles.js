import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  flex: 1;
  color: ${props => props.theme.secondary};
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
`;

export const Input = styled.input`
  display: flex;
  flex: 1;
  padding: 5px;
  border: unset;
  outline: unset;
  font-size: 20px;
`;
