import { useEffect, useState } from 'react';
import { getTodos } from '../apis';
import { ITodo } from '../types';

export default function useQuery() {
  const [todos, setTodos] = useState<ITodo[]>();
  const refetch = () => getTodos().then(res => setTodos(res));

  useEffect(() => {
    getTodos().then(res => setTodos(res));
  }, []);

  return { todos, refetch };
}
