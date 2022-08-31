import { useEffect, useState } from 'react';
import { getTodos } from '../apis/todoApi';

import { ITodo } from '../types';

export default function useQuery() {
  const [todos, setTodos] = useState<ITodo[]>();
  const refetch = () => getTodos().then((res: any) => setTodos(res));

  useEffect(() => {
    getTodos().then(res => setTodos(res));
  }, []);

  return { todos, refetch };
}
