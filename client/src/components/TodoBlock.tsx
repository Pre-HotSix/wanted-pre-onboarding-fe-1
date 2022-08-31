import styled from 'styled-components';
import {
  AiFillCheckCircle,
  AiFillEdit,
  AiFillDelete,
  AiOutlineCheck,
} from 'react-icons/ai';

import { useState } from 'react';
import { ITodo } from '../types';
import { removeTodo, updateTodo } from '../apis/todoApi';

interface Prop {
  todo: ITodo;
  refetch: () => void;
}

export default function TodoBlock({ todo, refetch }: Prop) {
  const [content, setContent] = useState({
    todo: todo.todo,
    isCompleted: false,
  });
  const [isEdit, setIsEdit] = useState(false);

  const completedHandler = () => {
    if (todo.isCompleted) {
      updateTodo({ ...content, isCompleted: false }, String(todo.id)).then(() =>
        refetch(),
      );
    } else if (!todo.isCompleted) {
      updateTodo({ ...content, isCompleted: true }, String(todo.id)).then(() =>
        refetch(),
      );
    }
  };

  const updateEdit = () => {
    updateTodo({ ...content, todo: content.todo }, String(todo.id))
      .then(() => refetch())
      .then(() => setIsEdit(false));
  };

  return (
    <Container>
      <Inner>
        <CheckCol>
          <AiFillCheckCircle onClick={completedHandler} />
        </CheckCol>
        <TextCol isComplete={todo.isCompleted}>
          {isEdit ? (
            <input
              maxLength={30}
              value={content.todo}
              onChange={e => setContent({ ...content, todo: e.target.value })}
            />
          ) : (
            <span>{todo.todo}</span>
          )}
        </TextCol>
        <EditCol>
          {isEdit ? (
            <AiOutlineCheck onClick={updateEdit} />
          ) : (
            <AiFillEdit onClick={() => setIsEdit(prev => !prev)} />
          )}
          <AiFillDelete
            onClick={() => removeTodo(String(todo.id)).then(() => refetch())}
          />
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
    cursor: pointer;
    width: 3rem;
    height: 3rem;
  }
`;
const TextCol = styled.div<{ isComplete?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  font-size: 2rem;
  width: 75%;
  text-decoration: ${prop => (prop.isComplete ? 'line-through' : 'none')};
  & > input {
    width: 100%;
  }
`;
const EditCol = styled.div`
  & > svg {
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
  & > svg:first-child {
    cursor: pointer;
    margin: 0 1rem;
  }
`;
