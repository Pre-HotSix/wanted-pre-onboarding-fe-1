import { useEffect, useState } from 'react';
import { getTodos } from '../apis/todoApi';
import { ITodo } from '../types';

export default function useQuery() {
  const [todos, setTodos] = useState<ITodo[]>();
  const refetch = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    refetch();
  }, []);

  return { todos, refetch };
}
