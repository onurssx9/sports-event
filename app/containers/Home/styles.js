import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100vh;
  width: 100vw;
  padding: 50px;

  @media (max-width: 600px) {
    padding: 10px;
    width: calc(100% - 90px);
  }
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
  border-top: 1px ${props => props.theme.secondary} solid;
  border-bottom: 1px ${props => props.theme.secondary} solid;
  padding: 25px;
  overflow-y: scroll;

  @media (max-width: 770px) {
    width: 100%;
    padding: 25px 0px;
  }
`;

export const AthleteCard = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
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
    width: 175px;
    height: 100%;
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius};
    background: ${props => props.theme.lightGrey};
    color: ${props => props.theme.green};
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    min-height: fit-content;
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

  @media (max-width: 600px) {
    margin-right: 0px;
  }
`;

export const AthleteName = styled.div`
  display: flex;
  flex: 3;
  font-weight: 100;
  align-items: center;
  min-height: 25px;

  @media (max-width: 600px) {
    margin: 10px;
  }
`;

export const FiltersWrapper = styled.div`
  display: flex;
  height: fit-content;
  width: 700px;
  background: ${props => props.theme.lightGrey};
  border-radius: 4px 4px 0px 0px;
  margin-top: 20px;
  overflow: hidden;

  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 12px;
  cursor: pointer;
  color: ${props => props.theme.secondary};
  transition: all 0.5s ease;
  border-right: 2px white solid;
  width: 75px;

  &:hover {
    background: ${props => props.theme.secondary};
    color: white;
  }

  &::after {
    content: "${props => props.filter || 'All'}";
    margin-left: 10px;
  }
`;
