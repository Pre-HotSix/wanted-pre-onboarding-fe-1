import { Route, Routes } from 'react-router-dom';
import { Main, Login, SignUp } from './pages';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <SignUp />
          </PublicRoute>
        }
      />
      <Route
        path="/todo"
        element={
          <PrivateRoute>
            <Main />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
