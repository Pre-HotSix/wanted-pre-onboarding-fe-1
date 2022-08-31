import { useEffect, useState } from 'react';
import { getTodos } from '../apis/todoApi';
import { ITodo } from '../types';

export default function useQuery() {
  const [todos, setTodos] = useState<ITodo[]>();
  const refetch = () => getTodos().then((res: any) => setTodos(res));

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token !== null) {
      const get = async () => await getTodos();
      get();
    }
  }, []);

  return { todos, refetch };
}
