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
    background-color: ${prop =>
      prop.isActive ? prop.theme.colors.GREY : prop.theme.colors.RED};
    cursor: ${prop => (prop.isActive ? 'auto' : 'pointer')};
    border: none;
    border-radius: 3rem;
    color: white;
  }
`;
