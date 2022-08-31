import styled from 'styled-components';

interface Prop {
  clickEvent?: () => void;
  buttonText?: string;
  isActive?: boolean;
}

export default function Button(props: Prop) {
  return (
    <Container isActive={props.isActive}>
      <button onClick={props.clickEvent} disabled={props.isActive}>
        {props.buttonText}
      </button>
    </Container>
  );
}

const Container = styled.div<{ isActive?: boolean }>`
  width: 100%;
  text-align: center;
  & > button {
    width: 50%;
    background-color: ${props =>
      props.isActive ? props.theme.colors.GREY : props.theme.colors.RED};
    cursor: ${props => (props.isActive ? 'auto' : 'pointer')};
    border: none;
    border-radius: 3rem;
    color: white;
  }
`;
