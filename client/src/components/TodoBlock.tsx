import styled from 'styled-components';
import { AiFillCheckCircle, AiFillEdit, AiFillDelete } from 'react-icons/ai';

export default function TodoBlock() {
  return (
    <Container>
      <Inner>
        <CheckCol>
          <AiFillCheckCircle />
        </CheckCol>
        <TextCol>
          <span>
            안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
          </span>
        </TextCol>
        <EditCol>
          <AiFillEdit />
          <AiFillDelete />
        </EditCol>
      </Inner>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 10%;
  border-bottom: 1px solid black;
`;
const Inner = styled.div`
  margin: 0 2rem;
  display: flex;
  width: 100%;
  align-items: center;
`;
const CheckCol = styled.div`
  width: 10%;
  text-align: center;
  & > svg {
    width: 3rem;
    height: 3rem;
  }
`;
const TextCol = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  width: 75%;
`;
const EditCol = styled.div`
  & > svg {
    width: 2rem;
    height: 2rem;
  }
  & > svg:first-child {
    margin: 0 1rem;
  }
`;
