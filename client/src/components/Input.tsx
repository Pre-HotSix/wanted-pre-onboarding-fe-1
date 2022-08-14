import styled from 'styled-components';

interface Prop {
  place?: string;
  type?: 'password' | 'email';
}

export default function Input(props: Prop) {
  return (
    <Container>
      <input type={'text' || props.type} placeholder={props.place} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  text-align: center;
  & > input {
    width: 80%;
    height: 3rem;
  }
`;
