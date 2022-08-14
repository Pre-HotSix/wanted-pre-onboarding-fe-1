import styled from 'styled-components';
import { TodoBlock } from '../components';
import { PageLayout } from '../styles';

export default function Main() {
  return (
    <PageLayout>
      <Inner>
        <FormLayout>
          <TodayInfo>
            <div>2022.08.14</div>
            <div>오늘의날씨</div>
          </TodayInfo>
          <TodoRegister>
            <textarea />
            <button>등록</button>
          </TodoRegister>
        </FormLayout>
        <TodoLayout>
          <TodoBlock />
        </TodoLayout>
      </Inner>
    </PageLayout>
  );
}

const Inner = styled.div`
  width: 80vw;
  height: 80vh;
  border: 1px solid black;
  border-radius: 5rem;
`;
const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
  border-radius: 5rem 5rem 0 0;
`;
const TodayInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
`;
const TodoRegister = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3rem;
  & > textarea {
    width: 90%;
  }
  & > button {
    width: 10%;
    height: 100%;
  }
`;
const TodoLayout = styled.div`
  width: 100%;
  height: 85%;
`;
