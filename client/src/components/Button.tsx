import styled from 'styled-components';

interface Prop {
  clickEvent?: () => void;
  buttonText?: string;
}

export default function Button(props: Prop) {
  return (
    <Container>
      <button onClick={props.clickEvent}>{props.buttonText}</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  & > button {
    width: 50%;
  }
`;
