import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 50px;
`;

export const Title = styled.h1`
  color: ${props => props.theme.secondary};
  text-align: center;
`;

export const Description = styled.div`
  position: relative;
  color: ${props => props.theme.secondary};
  text-align: center;
`;

export const RaceInformation = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 700px;
  border-top: 1px ${props => props.theme.lightGrey} solid;
  border-bottom: 1px ${props => props.theme.lightGrey} solid;
  margin-top: 50px;
  padding: 25px;
  overflow-y: scroll;
`;

export const AthleteCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 50px;
  background: ${props =>
    props.position === 'Start' ? props.theme.secondary : props.theme.green};
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  padding: 10px;
  align-items: center;

  & + & {
    margin-top: 5px;
  }

  &::after {
    content: "${props => props.position}ed at ${props => props.time}";
    display: flex;
    width: fit-content;
    height: 100%;
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.lightGrey};
    color: ${props => props.theme.green};
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-right: 10px;
  }
`;

export const AthleteNumber = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  font-weight: 600;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.lightGrey};
  color: ${props => props.theme.green};
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-right: 10px;
`;

export const AthleteName = styled.div`
  display: flex;
  flex: 3;
  font-weight: 100;
  align-items: center;
`;
