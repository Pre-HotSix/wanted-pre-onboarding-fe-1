import { Route, Routes } from 'react-router-dom';
import { Main, Login, SignUp } from './pages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/todo" element={<Main />} />
    </Routes>
  );
}
