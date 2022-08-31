import React from 'react';
import styled from 'styled-components';

interface Prop {
  place?: string;
  type?: 'password' | 'email';
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  valid?: boolean;
  handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input(props: Prop) {
  return (
    <Container isValid={props.valid}>
      <input
        type={props.type}
        placeholder={props.place}
        value={props.value}
        onChange={props.onChange}
        onKeyPress={props.handleSubmit}
      />
    </Container>
  );
}

const Container = styled.div<{ isValid?: boolean }>`
  width: 100%;
  text-align: center;
  & > input {
    width: 80%;
    height: 3rem;
    border: 1px solid ${prop => (prop.isValid ? 'red' : 'black')};
  }
`;
