import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { createTodo } from '../apis/todoApi';

import { TodoBlock } from '../components';
import useQuery from '../hooks/useQuery';
import { PageLayout } from '../styles';

export default function Todo() {
  const { todos, refetch } = useQuery();
  const [todo, setTodo] = useState('');

  return (
    <PageLayout>
      <Inner>
        <FormLayout>
          <TodoRegister>
            <input
              type="text"
              value={todo}
              onChange={e => setTodo(e.target.value)}
            />
            <button
              onClick={() =>
                createTodo(todo)
                  .then(() => setTodo(''))
                  .then(() => refetch())
              }
            >
              등록
            </button>
          </TodoRegister>
        </FormLayout>
        <TodoLayout>
          {todos?.map(todo => (
            <Fragment key={todo.id}>
              <TodoBlock todo={todo} refetch={refetch} />
            </Fragment>
          ))}
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
const TodoRegister = styled.div`
  display: flex;
  align-items: center;
  margin: 0 3rem;
  & > input {
    width: 90%;
  }
  & > button {
    cursor: pointer;
    width: 10%;
    height: 100%;
  }
`;
const TodoLayout = styled.div`
  width: 100%;
  height: 85%;
`;
